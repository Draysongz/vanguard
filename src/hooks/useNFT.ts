import { Address, OpenedContract, toNano } from "@ton/core";
import { useAsyncInitialze } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { useEffect, useState, useRef } from "react";
import { NftCollection } from "../../build/Vanguard_NftCollection";

export function useRoyal() {
  const { sender } = useTonConnect();
  const [mintedNFTs, setMintedNFTs] = useState(0);
  const { client } = useTonClient();
  const mintedNFTsRef = useRef(0);

  const NftContract = useAsyncInitialze(async () => {
    if (!client) return;

    const contract = NftCollection.fromAddress(
      Address.parse("kQBXNhJ_RCnw7epswuJjHL4kMudyYS0kayv3JFdmENHG66pF")
    );

    return client.open(contract) as OpenedContract<NftCollection>;
  }, [client]);

  const fetchStats = async () => {
    if (NftContract) {
      try {
        const nftstats = await NftContract.getGetCollectionData();
        // next_item_index is the index of the next NFT to be minted, so the number of minted NFTs is equal to next_item_index itself.
        const newCount = Number(nftstats.next_item_index);
        setMintedNFTs(newCount);
        mintedNFTsRef.current = newCount;
        console.log("Collection Data:", nftstats);
      } catch (error) {
        console.error("Error fetching collection data:", error);
      }
    }
  };

  useEffect(() => {
    fetchStats();
  }, [NftContract]);

  return {
    mintNFT: async () => {
      const NFT_PRICE = toNano("0.2");

      try {
        // Send the transaction
        const transactionHash = await NftContract?.send(
          sender,
          {
            value: toNano("0.1") + NFT_PRICE,
          },
          "Mint"
        );

        console.log("Transaction sent:", transactionHash);

        // Wait for transaction to be confirmed on blockchain
        console.log("Waiting for transaction confirmation...");
        await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait 10 seconds

        // Poll for updated stats until we see the count increase
        let attempts = 0;
        const maxAttempts = 30; // Try for 5 minutes (30 * 10 seconds)
        const initialCount = mintedNFTsRef.current;

        while (attempts < maxAttempts) {
          await fetchStats();
          // Check if the count has increased
          if (mintedNFTsRef.current > initialCount) {
            console.log(
              "Mint confirmed! Count updated:",
              mintedNFTsRef.current
            );
            return "Mint successful";
          }
          console.log(
            `Waiting for confirmation... attempt ${attempts + 1}/${maxAttempts}`
          );
          await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait another 10 seconds
          attempts++;
        }

        // If we get here, we've timed out
        console.log("Confirmation timeout - but transaction was sent");
        return "Mint sent (confirmation timeout)";
      } catch (error) {
        console.error("Mint error:", error);
        throw error;
      }
    },

    mintedNFTs: mintedNFTs,
    refreshStats: fetchStats,
  };
}
