import { useTonConnectUI, useTonAddress } from "@tonconnect/ui-react";


export function useTonConnect() {
  const [tonConnectUI] = useTonConnectUI();
  const TONAddress = useTonAddress(true);
  return {
    sender: {
      send: async () => {
        try {
          await tonConnectUI.sendTransaction({
            messages: [
              {
                address: args.to.toString(),
                amount: args.value.toString(),
                payload: args.body?.toBoc().toString("base64"),
              },
            ],
            validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
          });
        } catch (err) {
          console.log(err);
        }
      },
    },

    connected: tonConnectUI?.connected,
    userAddress: TONAddress,
  };
}
