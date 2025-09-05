import {
    Cell,
    Slice,
    Address,
    Builder,
    beginCell,
    ComputeError,
    TupleItem,
    TupleReader,
    Dictionary,
    contractAddress,
    address,
    ContractProvider,
    Sender,
    Contract,
    ContractABI,
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type DataSize = {
    $$type: 'DataSize';
    cells: bigint;
    bits: bigint;
    refs: bigint;
}

export function storeDataSize(src: DataSize) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.cells, 257);
        b_0.storeInt(src.bits, 257);
        b_0.storeInt(src.refs, 257);
    };
}

export function loadDataSize(slice: Slice) {
    const sc_0 = slice;
    const _cells = sc_0.loadIntBig(257);
    const _bits = sc_0.loadIntBig(257);
    const _refs = sc_0.loadIntBig(257);
    return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
}

export function loadTupleDataSize(source: TupleReader) {
    const _cells = source.readBigNumber();
    const _bits = source.readBigNumber();
    const _refs = source.readBigNumber();
    return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
}

export function loadGetterTupleDataSize(source: TupleReader) {
    const _cells = source.readBigNumber();
    const _bits = source.readBigNumber();
    const _refs = source.readBigNumber();
    return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
}

export function storeTupleDataSize(source: DataSize) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.cells);
    builder.writeNumber(source.bits);
    builder.writeNumber(source.refs);
    return builder.build();
}

export function dictValueParserDataSize(): DictionaryValue<DataSize> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDataSize(src)).endCell());
        },
        parse: (src) => {
            return loadDataSize(src.loadRef().beginParse());
        }
    }
}

export type SignedBundle = {
    $$type: 'SignedBundle';
    signature: Buffer;
    signedData: Slice;
}

export function storeSignedBundle(src: SignedBundle) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeBuffer(src.signature);
        b_0.storeBuilder(src.signedData.asBuilder());
    };
}

export function loadSignedBundle(slice: Slice) {
    const sc_0 = slice;
    const _signature = sc_0.loadBuffer(64);
    const _signedData = sc_0;
    return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
}

export function loadTupleSignedBundle(source: TupleReader) {
    const _signature = source.readBuffer();
    const _signedData = source.readCell().asSlice();
    return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
}

export function loadGetterTupleSignedBundle(source: TupleReader) {
    const _signature = source.readBuffer();
    const _signedData = source.readCell().asSlice();
    return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
}

export function storeTupleSignedBundle(source: SignedBundle) {
    const builder = new TupleBuilder();
    builder.writeBuffer(source.signature);
    builder.writeSlice(source.signedData.asCell());
    return builder.build();
}

export function dictValueParserSignedBundle(): DictionaryValue<SignedBundle> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSignedBundle(src)).endCell());
        },
        parse: (src) => {
            return loadSignedBundle(src.loadRef().beginParse());
        }
    }
}

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    const sc_0 = slice;
    const _code = sc_0.loadRef();
    const _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function loadTupleStateInit(source: TupleReader) {
    const _code = source.readCell();
    const _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function loadGetterTupleStateInit(source: TupleReader) {
    const _code = source.readCell();
    const _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function storeTupleStateInit(source: StateInit) {
    const builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

export function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounceable: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeBit(src.bounceable);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    const sc_0 = slice;
    const _bounceable = sc_0.loadBit();
    const _sender = sc_0.loadAddress();
    const _value = sc_0.loadIntBig(257);
    const _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
}

export function loadTupleContext(source: TupleReader) {
    const _bounceable = source.readBoolean();
    const _sender = source.readAddress();
    const _value = source.readBigNumber();
    const _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
}

export function loadGetterTupleContext(source: TupleReader) {
    const _bounceable = source.readBoolean();
    const _sender = source.readAddress();
    const _value = source.readBigNumber();
    const _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
}

export function storeTupleContext(source: Context) {
    const builder = new TupleBuilder();
    builder.writeBoolean(source.bounceable);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

export function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
        b_0.storeInt(src.value, 257);
        b_0.storeAddress(src.to);
        b_0.storeBit(src.bounce);
    };
}

export function loadSendParameters(slice: Slice) {
    const sc_0 = slice;
    const _mode = sc_0.loadIntBig(257);
    const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _value = sc_0.loadIntBig(257);
    const _to = sc_0.loadAddress();
    const _bounce = sc_0.loadBit();
    return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
}

export function loadTupleSendParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _code = source.readCellOpt();
    const _data = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
}

export function loadGetterTupleSendParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _code = source.readCellOpt();
    const _data = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
}

export function storeTupleSendParameters(source: SendParameters) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    builder.writeNumber(source.value);
    builder.writeAddress(source.to);
    builder.writeBoolean(source.bounce);
    return builder.build();
}

export function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type MessageParameters = {
    $$type: 'MessageParameters';
    mode: bigint;
    body: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
}

export function storeMessageParameters(src: MessageParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        b_0.storeInt(src.value, 257);
        b_0.storeAddress(src.to);
        b_0.storeBit(src.bounce);
    };
}

export function loadMessageParameters(slice: Slice) {
    const sc_0 = slice;
    const _mode = sc_0.loadIntBig(257);
    const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _value = sc_0.loadIntBig(257);
    const _to = sc_0.loadAddress();
    const _bounce = sc_0.loadBit();
    return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
}

export function loadTupleMessageParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
}

export function loadGetterTupleMessageParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
}

export function storeTupleMessageParameters(source: MessageParameters) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeNumber(source.value);
    builder.writeAddress(source.to);
    builder.writeBoolean(source.bounce);
    return builder.build();
}

export function dictValueParserMessageParameters(): DictionaryValue<MessageParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeMessageParameters(src)).endCell());
        },
        parse: (src) => {
            return loadMessageParameters(src.loadRef().beginParse());
        }
    }
}

export type DeployParameters = {
    $$type: 'DeployParameters';
    mode: bigint;
    body: Cell | null;
    value: bigint;
    bounce: boolean;
    init: StateInit;
}

export function storeDeployParameters(src: DeployParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        b_0.storeInt(src.value, 257);
        b_0.storeBit(src.bounce);
        b_0.store(storeStateInit(src.init));
    };
}

export function loadDeployParameters(slice: Slice) {
    const sc_0 = slice;
    const _mode = sc_0.loadIntBig(257);
    const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _value = sc_0.loadIntBig(257);
    const _bounce = sc_0.loadBit();
    const _init = loadStateInit(sc_0);
    return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
}

export function loadTupleDeployParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _bounce = source.readBoolean();
    const _init = loadTupleStateInit(source);
    return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
}

export function loadGetterTupleDeployParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _bounce = source.readBoolean();
    const _init = loadGetterTupleStateInit(source);
    return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
}

export function storeTupleDeployParameters(source: DeployParameters) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeNumber(source.value);
    builder.writeBoolean(source.bounce);
    builder.writeTuple(storeTupleStateInit(source.init));
    return builder.build();
}

export function dictValueParserDeployParameters(): DictionaryValue<DeployParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployParameters(src)).endCell());
        },
        parse: (src) => {
            return loadDeployParameters(src.loadRef().beginParse());
        }
    }
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    const sc_0 = slice;
    const _workchain = sc_0.loadIntBig(8);
    const _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

export function loadTupleStdAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

export function loadGetterTupleStdAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

export function storeTupleStdAddress(source: StdAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeNumber(source.address);
    return builder.build();
}

export function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
        },
        parse: (src) => {
            return loadStdAddress(src.loadRef().beginParse());
        }
    }
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    const sc_0 = slice;
    const _workchain = sc_0.loadIntBig(32);
    const _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

export function loadTupleVarAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

export function loadGetterTupleVarAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

export function storeTupleVarAddress(source: VarAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeSlice(source.address.asCell());
    return builder.build();
}

export function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
        },
        parse: (src) => {
            return loadVarAddress(src.loadRef().beginParse());
        }
    }
}

export type BasechainAddress = {
    $$type: 'BasechainAddress';
    hash: bigint | null;
}

export function storeBasechainAddress(src: BasechainAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        if (src.hash !== null && src.hash !== undefined) { b_0.storeBit(true).storeInt(src.hash, 257); } else { b_0.storeBit(false); }
    };
}

export function loadBasechainAddress(slice: Slice) {
    const sc_0 = slice;
    const _hash = sc_0.loadBit() ? sc_0.loadIntBig(257) : null;
    return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function loadTupleBasechainAddress(source: TupleReader) {
    const _hash = source.readBigNumberOpt();
    return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function loadGetterTupleBasechainAddress(source: TupleReader) {
    const _hash = source.readBigNumberOpt();
    return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function storeTupleBasechainAddress(source: BasechainAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.hash);
    return builder.build();
}

export function dictValueParserBasechainAddress(): DictionaryValue<BasechainAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBasechainAddress(src)).endCell());
        },
        parse: (src) => {
            return loadBasechainAddress(src.loadRef().beginParse());
        }
    }
}

export type UpdateJettonWallet = {
    $$type: 'UpdateJettonWallet';
    jettonWallet: Address;
}

export function storeUpdateJettonWallet(src: UpdateJettonWallet) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2742123182, 32);
        b_0.storeAddress(src.jettonWallet);
    };
}

export function loadUpdateJettonWallet(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2742123182) { throw Error('Invalid prefix'); }
    const _jettonWallet = sc_0.loadAddress();
    return { $$type: 'UpdateJettonWallet' as const, jettonWallet: _jettonWallet };
}

export function loadTupleUpdateJettonWallet(source: TupleReader) {
    const _jettonWallet = source.readAddress();
    return { $$type: 'UpdateJettonWallet' as const, jettonWallet: _jettonWallet };
}

export function loadGetterTupleUpdateJettonWallet(source: TupleReader) {
    const _jettonWallet = source.readAddress();
    return { $$type: 'UpdateJettonWallet' as const, jettonWallet: _jettonWallet };
}

export function storeTupleUpdateJettonWallet(source: UpdateJettonWallet) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.jettonWallet);
    return builder.build();
}

export function dictValueParserUpdateJettonWallet(): DictionaryValue<UpdateJettonWallet> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUpdateJettonWallet(src)).endCell());
        },
        parse: (src) => {
            return loadUpdateJettonWallet(src.loadRef().beginParse());
        }
    }
}

export type UpdateZippWallet = {
    $$type: 'UpdateZippWallet';
    jettonWallet: Address;
}

export function storeUpdateZippWallet(src: UpdateZippWallet) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3842123343, 32);
        b_0.storeAddress(src.jettonWallet);
    };
}

export function loadUpdateZippWallet(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3842123343) { throw Error('Invalid prefix'); }
    const _jettonWallet = sc_0.loadAddress();
    return { $$type: 'UpdateZippWallet' as const, jettonWallet: _jettonWallet };
}

export function loadTupleUpdateZippWallet(source: TupleReader) {
    const _jettonWallet = source.readAddress();
    return { $$type: 'UpdateZippWallet' as const, jettonWallet: _jettonWallet };
}

export function loadGetterTupleUpdateZippWallet(source: TupleReader) {
    const _jettonWallet = source.readAddress();
    return { $$type: 'UpdateZippWallet' as const, jettonWallet: _jettonWallet };
}

export function storeTupleUpdateZippWallet(source: UpdateZippWallet) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.jettonWallet);
    return builder.build();
}

export function dictValueParserUpdateZippWallet(): DictionaryValue<UpdateZippWallet> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUpdateZippWallet(src)).endCell());
        },
        parse: (src) => {
            return loadUpdateZippWallet(src.loadRef().beginParse());
        }
    }
}

export type CreateAggregator = {
    $$type: 'CreateAggregator';
    owner: Address;
}

export function storeCreateAggregator(src: CreateAggregator) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3644408704, 32);
        b_0.storeAddress(src.owner);
    };
}

export function loadCreateAggregator(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3644408704) { throw Error('Invalid prefix'); }
    const _owner = sc_0.loadAddress();
    return { $$type: 'CreateAggregator' as const, owner: _owner };
}

export function loadTupleCreateAggregator(source: TupleReader) {
    const _owner = source.readAddress();
    return { $$type: 'CreateAggregator' as const, owner: _owner };
}

export function loadGetterTupleCreateAggregator(source: TupleReader) {
    const _owner = source.readAddress();
    return { $$type: 'CreateAggregator' as const, owner: _owner };
}

export function storeTupleCreateAggregator(source: CreateAggregator) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    return builder.build();
}

export function dictValueParserCreateAggregator(): DictionaryValue<CreateAggregator> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCreateAggregator(src)).endCell());
        },
        parse: (src) => {
            return loadCreateAggregator(src.loadRef().beginParse());
        }
    }
}

export type ChangeAdmin = {
    $$type: 'ChangeAdmin';
    newOwner: Address;
}

export function storeChangeAdmin(src: ChangeAdmin) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(636739454, 32);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeAdmin(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 636739454) { throw Error('Invalid prefix'); }
    const _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeAdmin' as const, newOwner: _newOwner };
}

export function loadTupleChangeAdmin(source: TupleReader) {
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeAdmin' as const, newOwner: _newOwner };
}

export function loadGetterTupleChangeAdmin(source: TupleReader) {
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeAdmin' as const, newOwner: _newOwner };
}

export function storeTupleChangeAdmin(source: ChangeAdmin) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.newOwner);
    return builder.build();
}

export function dictValueParserChangeAdmin(): DictionaryValue<ChangeAdmin> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeAdmin(src)).endCell());
        },
        parse: (src) => {
            return loadChangeAdmin(src.loadRef().beginParse());
        }
    }
}

export type StartMining = {
    $$type: 'StartMining';
    signature: Slice;
    strength: bigint;
    nonce: bigint;
}

export function storeStartMining(src: StartMining) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(256918561, 32);
        b_0.storeRef(src.signature.asCell());
        b_0.storeUint(src.strength, 8);
        b_0.storeUint(src.nonce, 64);
    };
}

export function loadStartMining(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 256918561) { throw Error('Invalid prefix'); }
    const _signature = sc_0.loadRef().asSlice();
    const _strength = sc_0.loadUintBig(8);
    const _nonce = sc_0.loadUintBig(64);
    return { $$type: 'StartMining' as const, signature: _signature, strength: _strength, nonce: _nonce };
}

export function loadTupleStartMining(source: TupleReader) {
    const _signature = source.readCell().asSlice();
    const _strength = source.readBigNumber();
    const _nonce = source.readBigNumber();
    return { $$type: 'StartMining' as const, signature: _signature, strength: _strength, nonce: _nonce };
}

export function loadGetterTupleStartMining(source: TupleReader) {
    const _signature = source.readCell().asSlice();
    const _strength = source.readBigNumber();
    const _nonce = source.readBigNumber();
    return { $$type: 'StartMining' as const, signature: _signature, strength: _strength, nonce: _nonce };
}

export function storeTupleStartMining(source: StartMining) {
    const builder = new TupleBuilder();
    builder.writeSlice(source.signature.asCell());
    builder.writeNumber(source.strength);
    builder.writeNumber(source.nonce);
    return builder.build();
}

export function dictValueParserStartMining(): DictionaryValue<StartMining> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStartMining(src)).endCell());
        },
        parse: (src) => {
            return loadStartMining(src.loadRef().beginParse());
        }
    }
}

export type ClaimMinedTokens = {
    $$type: 'ClaimMinedTokens';
}

export function storeClaimMinedTokens(src: ClaimMinedTokens) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(4178973992, 32);
    };
}

export function loadClaimMinedTokens(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 4178973992) { throw Error('Invalid prefix'); }
    return { $$type: 'ClaimMinedTokens' as const };
}

export function loadTupleClaimMinedTokens(source: TupleReader) {
    return { $$type: 'ClaimMinedTokens' as const };
}

export function loadGetterTupleClaimMinedTokens(source: TupleReader) {
    return { $$type: 'ClaimMinedTokens' as const };
}

export function storeTupleClaimMinedTokens(source: ClaimMinedTokens) {
    const builder = new TupleBuilder();
    return builder.build();
}

export function dictValueParserClaimMinedTokens(): DictionaryValue<ClaimMinedTokens> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaimMinedTokens(src)).endCell());
        },
        parse: (src) => {
            return loadClaimMinedTokens(src.loadRef().beginParse());
        }
    }
}

export type SentMinedTokens = {
    $$type: 'SentMinedTokens';
    amount: bigint;
    recipient: Address;
}

export function storeSentMinedTokens(src: SentMinedTokens) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1740327225, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.recipient);
    };
}

export function loadSentMinedTokens(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1740327225) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadIntBig(257);
    const _recipient = sc_0.loadAddress();
    return { $$type: 'SentMinedTokens' as const, amount: _amount, recipient: _recipient };
}

export function loadTupleSentMinedTokens(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _recipient = source.readAddress();
    return { $$type: 'SentMinedTokens' as const, amount: _amount, recipient: _recipient };
}

export function loadGetterTupleSentMinedTokens(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _recipient = source.readAddress();
    return { $$type: 'SentMinedTokens' as const, amount: _amount, recipient: _recipient };
}

export function storeTupleSentMinedTokens(source: SentMinedTokens) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.recipient);
    return builder.build();
}

export function dictValueParserSentMinedTokens(): DictionaryValue<SentMinedTokens> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSentMinedTokens(src)).endCell());
        },
        parse: (src) => {
            return loadSentMinedTokens(src.loadRef().beginParse());
        }
    }
}

export type SendMinedTokens = {
    $$type: 'SendMinedTokens';
    recipient: Address;
    amount: bigint;
}

export function storeSendMinedTokens(src: SendMinedTokens) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(42025349, 32);
        b_0.storeAddress(src.recipient);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadSendMinedTokens(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 42025349) { throw Error('Invalid prefix'); }
    const _recipient = sc_0.loadAddress();
    const _amount = sc_0.loadIntBig(257);
    return { $$type: 'SendMinedTokens' as const, recipient: _recipient, amount: _amount };
}

export function loadTupleSendMinedTokens(source: TupleReader) {
    const _recipient = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'SendMinedTokens' as const, recipient: _recipient, amount: _amount };
}

export function loadGetterTupleSendMinedTokens(source: TupleReader) {
    const _recipient = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'SendMinedTokens' as const, recipient: _recipient, amount: _amount };
}

export function storeTupleSendMinedTokens(source: SendMinedTokens) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.recipient);
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserSendMinedTokens(): DictionaryValue<SendMinedTokens> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendMinedTokens(src)).endCell());
        },
        parse: (src) => {
            return loadSendMinedTokens(src.loadRef().beginParse());
        }
    }
}

export type TestSendMinedTokens = {
    $$type: 'TestSendMinedTokens';
    recipient: Address;
    amount: bigint;
}

export function storeTestSendMinedTokens(src: TestSendMinedTokens) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2667481999, 32);
        b_0.storeAddress(src.recipient);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadTestSendMinedTokens(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2667481999) { throw Error('Invalid prefix'); }
    const _recipient = sc_0.loadAddress();
    const _amount = sc_0.loadIntBig(257);
    return { $$type: 'TestSendMinedTokens' as const, recipient: _recipient, amount: _amount };
}

export function loadTupleTestSendMinedTokens(source: TupleReader) {
    const _recipient = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'TestSendMinedTokens' as const, recipient: _recipient, amount: _amount };
}

export function loadGetterTupleTestSendMinedTokens(source: TupleReader) {
    const _recipient = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'TestSendMinedTokens' as const, recipient: _recipient, amount: _amount };
}

export function storeTupleTestSendMinedTokens(source: TestSendMinedTokens) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.recipient);
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserTestSendMinedTokens(): DictionaryValue<TestSendMinedTokens> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTestSendMinedTokens(src)).endCell());
        },
        parse: (src) => {
            return loadTestSendMinedTokens(src.loadRef().beginParse());
        }
    }
}

export type ResetSession = {
    $$type: 'ResetSession';
}

export function storeResetSession(src: ResetSession) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(4084086825, 32);
    };
}

export function loadResetSession(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 4084086825) { throw Error('Invalid prefix'); }
    return { $$type: 'ResetSession' as const };
}

export function loadTupleResetSession(source: TupleReader) {
    return { $$type: 'ResetSession' as const };
}

export function loadGetterTupleResetSession(source: TupleReader) {
    return { $$type: 'ResetSession' as const };
}

export function storeTupleResetSession(source: ResetSession) {
    const builder = new TupleBuilder();
    return builder.build();
}

export function dictValueParserResetSession(): DictionaryValue<ResetSession> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeResetSession(src)).endCell());
        },
        parse: (src) => {
            return loadResetSession(src.loadRef().beginParse());
        }
    }
}

export type SessionReset = {
    $$type: 'SessionReset';
    user: Address;
    message: string;
}

export function storeSessionReset(src: SessionReset) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3813174516, 32);
        b_0.storeAddress(src.user);
        b_0.storeStringRefTail(src.message);
    };
}

export function loadSessionReset(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3813174516) { throw Error('Invalid prefix'); }
    const _user = sc_0.loadAddress();
    const _message = sc_0.loadStringRefTail();
    return { $$type: 'SessionReset' as const, user: _user, message: _message };
}

export function loadTupleSessionReset(source: TupleReader) {
    const _user = source.readAddress();
    const _message = source.readString();
    return { $$type: 'SessionReset' as const, user: _user, message: _message };
}

export function loadGetterTupleSessionReset(source: TupleReader) {
    const _user = source.readAddress();
    const _message = source.readString();
    return { $$type: 'SessionReset' as const, user: _user, message: _message };
}

export function storeTupleSessionReset(source: SessionReset) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.user);
    builder.writeString(source.message);
    return builder.build();
}

export function dictValueParserSessionReset(): DictionaryValue<SessionReset> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSessionReset(src)).endCell());
        },
        parse: (src) => {
            return loadSessionReset(src.loadRef().beginParse());
        }
    }
}

export type MiningStarted = {
    $$type: 'MiningStarted';
    user: Address;
    startTime: bigint;
}

export function storeMiningStarted(src: MiningStarted) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1329353948, 32);
        b_0.storeAddress(src.user);
        b_0.storeInt(src.startTime, 257);
    };
}

export function loadMiningStarted(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1329353948) { throw Error('Invalid prefix'); }
    const _user = sc_0.loadAddress();
    const _startTime = sc_0.loadIntBig(257);
    return { $$type: 'MiningStarted' as const, user: _user, startTime: _startTime };
}

export function loadTupleMiningStarted(source: TupleReader) {
    const _user = source.readAddress();
    const _startTime = source.readBigNumber();
    return { $$type: 'MiningStarted' as const, user: _user, startTime: _startTime };
}

export function loadGetterTupleMiningStarted(source: TupleReader) {
    const _user = source.readAddress();
    const _startTime = source.readBigNumber();
    return { $$type: 'MiningStarted' as const, user: _user, startTime: _startTime };
}

export function storeTupleMiningStarted(source: MiningStarted) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.user);
    builder.writeNumber(source.startTime);
    return builder.build();
}

export function dictValueParserMiningStarted(): DictionaryValue<MiningStarted> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeMiningStarted(src)).endCell());
        },
        parse: (src) => {
            return loadMiningStarted(src.loadRef().beginParse());
        }
    }
}

export type TokensClaimed = {
    $$type: 'TokensClaimed';
    user: Address;
    amount: bigint;
}

export function storeTokensClaimed(src: TokensClaimed) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1024912805, 32);
        b_0.storeAddress(src.user);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadTokensClaimed(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1024912805) { throw Error('Invalid prefix'); }
    const _user = sc_0.loadAddress();
    const _amount = sc_0.loadIntBig(257);
    return { $$type: 'TokensClaimed' as const, user: _user, amount: _amount };
}

export function loadTupleTokensClaimed(source: TupleReader) {
    const _user = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'TokensClaimed' as const, user: _user, amount: _amount };
}

export function loadGetterTupleTokensClaimed(source: TupleReader) {
    const _user = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'TokensClaimed' as const, user: _user, amount: _amount };
}

export function storeTupleTokensClaimed(source: TokensClaimed) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.user);
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserTokensClaimed(): DictionaryValue<TokensClaimed> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokensClaimed(src)).endCell());
        },
        parse: (src) => {
            return loadTokensClaimed(src.loadRef().beginParse());
        }
    }
}

export type JettonTransfer = {
    $$type: 'JettonTransfer';
    queryId: bigint;
    amount: bigint;
    destination: Address;
    responseDestination: Address | null;
    customPayload: Cell | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
}

export function storeJettonTransfer(src: JettonTransfer) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(260734629, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.destination);
        b_0.storeAddress(src.responseDestination);
        if (src.customPayload !== null && src.customPayload !== undefined) { b_0.storeBit(true).storeRef(src.customPayload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forwardTonAmount);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadJettonTransfer(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 260734629) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _amount = sc_0.loadCoins();
    const _destination = sc_0.loadAddress();
    const _responseDestination = sc_0.loadMaybeAddress();
    const _customPayload = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _forwardTonAmount = sc_0.loadCoins();
    const _forwardPayload = sc_0;
    return { $$type: 'JettonTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, responseDestination: _responseDestination, customPayload: _customPayload, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

export function loadTupleJettonTransfer(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _destination = source.readAddress();
    const _responseDestination = source.readAddressOpt();
    const _customPayload = source.readCellOpt();
    const _forwardTonAmount = source.readBigNumber();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'JettonTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, responseDestination: _responseDestination, customPayload: _customPayload, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

export function loadGetterTupleJettonTransfer(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _destination = source.readAddress();
    const _responseDestination = source.readAddressOpt();
    const _customPayload = source.readCellOpt();
    const _forwardTonAmount = source.readBigNumber();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'JettonTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, responseDestination: _responseDestination, customPayload: _customPayload, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

export function storeTupleJettonTransfer(source: JettonTransfer) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.destination);
    builder.writeAddress(source.responseDestination);
    builder.writeCell(source.customPayload);
    builder.writeNumber(source.forwardTonAmount);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserJettonTransfer(): DictionaryValue<JettonTransfer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadJettonTransfer(src.loadRef().beginParse());
        }
    }
}

export type Excesses = {
    $$type: 'Excesses';
}

export function storeExcesses(src: Excesses) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3576854235, 32);
    };
}

export function loadExcesses(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3576854235) { throw Error('Invalid prefix'); }
    return { $$type: 'Excesses' as const };
}

export function loadTupleExcesses(source: TupleReader) {
    return { $$type: 'Excesses' as const };
}

export function loadGetterTupleExcesses(source: TupleReader) {
    return { $$type: 'Excesses' as const };
}

export function storeTupleExcesses(source: Excesses) {
    const builder = new TupleBuilder();
    return builder.build();
}

export function dictValueParserExcesses(): DictionaryValue<Excesses> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeExcesses(src)).endCell());
        },
        parse: (src) => {
            return loadExcesses(src.loadRef().beginParse());
        }
    }
}

export type TokenNotification = {
    $$type: 'TokenNotification';
    queryId: bigint;
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeTokenNotification(src: TokenNotification) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1935855772, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadTokenNotification(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1935855772) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleTokenNotification(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleTokenNotification(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleTokenNotification(source: TokenNotification) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserTokenNotification(): DictionaryValue<TokenNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTokenNotification(src)).endCell());
        },
        parse: (src) => {
            return loadTokenNotification(src.loadRef().beginParse());
        }
    }
}

export type ProvideWalletBalance = {
    $$type: 'ProvideWalletBalance';
    receiver: Address;
    includeVerifyInfo: boolean;
}

export function storeProvideWalletBalance(src: ProvideWalletBalance) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2059982169, 32);
        b_0.storeAddress(src.receiver);
        b_0.storeBit(src.includeVerifyInfo);
    };
}

export function loadProvideWalletBalance(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2059982169) { throw Error('Invalid prefix'); }
    const _receiver = sc_0.loadAddress();
    const _includeVerifyInfo = sc_0.loadBit();
    return { $$type: 'ProvideWalletBalance' as const, receiver: _receiver, includeVerifyInfo: _includeVerifyInfo };
}

export function loadTupleProvideWalletBalance(source: TupleReader) {
    const _receiver = source.readAddress();
    const _includeVerifyInfo = source.readBoolean();
    return { $$type: 'ProvideWalletBalance' as const, receiver: _receiver, includeVerifyInfo: _includeVerifyInfo };
}

export function loadGetterTupleProvideWalletBalance(source: TupleReader) {
    const _receiver = source.readAddress();
    const _includeVerifyInfo = source.readBoolean();
    return { $$type: 'ProvideWalletBalance' as const, receiver: _receiver, includeVerifyInfo: _includeVerifyInfo };
}

export function storeTupleProvideWalletBalance(source: ProvideWalletBalance) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.receiver);
    builder.writeBoolean(source.includeVerifyInfo);
    return builder.build();
}

export function dictValueParserProvideWalletBalance(): DictionaryValue<ProvideWalletBalance> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeProvideWalletBalance(src)).endCell());
        },
        parse: (src) => {
            return loadProvideWalletBalance(src.loadRef().beginParse());
        }
    }
}

export type TakeWalletBalance = {
    $$type: 'TakeWalletBalance';
    balance: bigint;
    verifyInfo: VerifyInfo | null;
}

export function storeTakeWalletBalance(src: TakeWalletBalance) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3396861378, 32);
        b_0.storeCoins(src.balance);
        if (src.verifyInfo !== null && src.verifyInfo !== undefined) { b_0.storeBit(true); b_0.store(storeVerifyInfo(src.verifyInfo)); } else { b_0.storeBit(false); }
    };
}

export function loadTakeWalletBalance(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3396861378) { throw Error('Invalid prefix'); }
    const _balance = sc_0.loadCoins();
    const _verifyInfo = sc_0.loadBit() ? loadVerifyInfo(sc_0) : null;
    return { $$type: 'TakeWalletBalance' as const, balance: _balance, verifyInfo: _verifyInfo };
}

export function loadTupleTakeWalletBalance(source: TupleReader) {
    const _balance = source.readBigNumber();
    const _verifyInfo_p = source.readTupleOpt();
    const _verifyInfo = _verifyInfo_p ? loadTupleVerifyInfo(_verifyInfo_p) : null;
    return { $$type: 'TakeWalletBalance' as const, balance: _balance, verifyInfo: _verifyInfo };
}

export function loadGetterTupleTakeWalletBalance(source: TupleReader) {
    const _balance = source.readBigNumber();
    const _verifyInfo_p = source.readTupleOpt();
    const _verifyInfo = _verifyInfo_p ? loadTupleVerifyInfo(_verifyInfo_p) : null;
    return { $$type: 'TakeWalletBalance' as const, balance: _balance, verifyInfo: _verifyInfo };
}

export function storeTupleTakeWalletBalance(source: TakeWalletBalance) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.balance);
    if (source.verifyInfo !== null && source.verifyInfo !== undefined) {
        builder.writeTuple(storeTupleVerifyInfo(source.verifyInfo));
    } else {
        builder.writeTuple(null);
    }
    return builder.build();
}

export function dictValueParserTakeWalletBalance(): DictionaryValue<TakeWalletBalance> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTakeWalletBalance(src)).endCell());
        },
        parse: (src) => {
            return loadTakeWalletBalance(src.loadRef().beginParse());
        }
    }
}

export type VerifyInfo = {
    $$type: 'VerifyInfo';
    owner: Address;
    minter: Address;
    code: Cell;
}

export function storeVerifyInfo(src: VerifyInfo) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.minter);
        b_0.storeRef(src.code);
    };
}

export function loadVerifyInfo(slice: Slice) {
    const sc_0 = slice;
    const _owner = sc_0.loadAddress();
    const _minter = sc_0.loadAddress();
    const _code = sc_0.loadRef();
    return { $$type: 'VerifyInfo' as const, owner: _owner, minter: _minter, code: _code };
}

export function loadTupleVerifyInfo(source: TupleReader) {
    const _owner = source.readAddress();
    const _minter = source.readAddress();
    const _code = source.readCell();
    return { $$type: 'VerifyInfo' as const, owner: _owner, minter: _minter, code: _code };
}

export function loadGetterTupleVerifyInfo(source: TupleReader) {
    const _owner = source.readAddress();
    const _minter = source.readAddress();
    const _code = source.readCell();
    return { $$type: 'VerifyInfo' as const, owner: _owner, minter: _minter, code: _code };
}

export function storeTupleVerifyInfo(source: VerifyInfo) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeAddress(source.minter);
    builder.writeCell(source.code);
    return builder.build();
}

export function dictValueParserVerifyInfo(): DictionaryValue<VerifyInfo> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVerifyInfo(src)).endCell());
        },
        parse: (src) => {
            return loadVerifyInfo(src.loadRef().beginParse());
        }
    }
}

export type ChildAlreadyExists = {
    $$type: 'ChildAlreadyExists';
    owner: Address;
    userContract: Address | null;
}

export function storeChildAlreadyExists(src: ChildAlreadyExists) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2152919071, 32);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.userContract);
    };
}

export function loadChildAlreadyExists(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2152919071) { throw Error('Invalid prefix'); }
    const _owner = sc_0.loadAddress();
    const _userContract = sc_0.loadMaybeAddress();
    return { $$type: 'ChildAlreadyExists' as const, owner: _owner, userContract: _userContract };
}

export function loadTupleChildAlreadyExists(source: TupleReader) {
    const _owner = source.readAddress();
    const _userContract = source.readAddressOpt();
    return { $$type: 'ChildAlreadyExists' as const, owner: _owner, userContract: _userContract };
}

export function loadGetterTupleChildAlreadyExists(source: TupleReader) {
    const _owner = source.readAddress();
    const _userContract = source.readAddressOpt();
    return { $$type: 'ChildAlreadyExists' as const, owner: _owner, userContract: _userContract };
}

export function storeTupleChildAlreadyExists(source: ChildAlreadyExists) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeAddress(source.userContract);
    return builder.build();
}

export function dictValueParserChildAlreadyExists(): DictionaryValue<ChildAlreadyExists> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChildAlreadyExists(src)).endCell());
        },
        parse: (src) => {
            return loadChildAlreadyExists(src.loadRef().beginParse());
        }
    }
}

export type Seller = {
    $$type: 'Seller';
    address: Address;
    amount: bigint;
}

export function storeSeller(src: Seller) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.address);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadSeller(slice: Slice) {
    const sc_0 = slice;
    const _address = sc_0.loadAddress();
    const _amount = sc_0.loadIntBig(257);
    return { $$type: 'Seller' as const, address: _address, amount: _amount };
}

export function loadTupleSeller(source: TupleReader) {
    const _address = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'Seller' as const, address: _address, amount: _amount };
}

export function loadGetterTupleSeller(source: TupleReader) {
    const _address = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'Seller' as const, address: _address, amount: _amount };
}

export function storeTupleSeller(source: Seller) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserSeller(): DictionaryValue<Seller> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSeller(src)).endCell());
        },
        parse: (src) => {
            return loadSeller(src.loadRef().beginParse());
        }
    }
}

export type AddSeller = {
    $$type: 'AddSeller';
    rate: bigint;
    seller: Seller;
}

export function storeAddSeller(src: AddSeller) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3318254856, 32);
        b_0.storeInt(src.rate, 257);
        b_0.store(storeSeller(src.seller));
    };
}

export function loadAddSeller(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3318254856) { throw Error('Invalid prefix'); }
    const _rate = sc_0.loadIntBig(257);
    const _seller = loadSeller(sc_0);
    return { $$type: 'AddSeller' as const, rate: _rate, seller: _seller };
}

export function loadTupleAddSeller(source: TupleReader) {
    const _rate = source.readBigNumber();
    const _seller = loadTupleSeller(source);
    return { $$type: 'AddSeller' as const, rate: _rate, seller: _seller };
}

export function loadGetterTupleAddSeller(source: TupleReader) {
    const _rate = source.readBigNumber();
    const _seller = loadGetterTupleSeller(source);
    return { $$type: 'AddSeller' as const, rate: _rate, seller: _seller };
}

export function storeTupleAddSeller(source: AddSeller) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.rate);
    builder.writeTuple(storeTupleSeller(source.seller));
    return builder.build();
}

export function dictValueParserAddSeller(): DictionaryValue<AddSeller> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAddSeller(src)).endCell());
        },
        parse: (src) => {
            return loadAddSeller(src.loadRef().beginParse());
        }
    }
}

export type BuyCompleted = {
    $$type: 'BuyCompleted';
    amount: bigint;
    rate: bigint;
    txId: bigint;
}

export function storeBuyCompleted(src: BuyCompleted) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2442858138, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeInt(src.rate, 257);
        b_0.storeInt(src.txId, 257);
    };
}

export function loadBuyCompleted(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2442858138) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadIntBig(257);
    const _rate = sc_0.loadIntBig(257);
    const _txId = sc_0.loadIntBig(257);
    return { $$type: 'BuyCompleted' as const, amount: _amount, rate: _rate, txId: _txId };
}

export function loadTupleBuyCompleted(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _rate = source.readBigNumber();
    const _txId = source.readBigNumber();
    return { $$type: 'BuyCompleted' as const, amount: _amount, rate: _rate, txId: _txId };
}

export function loadGetterTupleBuyCompleted(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _rate = source.readBigNumber();
    const _txId = source.readBigNumber();
    return { $$type: 'BuyCompleted' as const, amount: _amount, rate: _rate, txId: _txId };
}

export function storeTupleBuyCompleted(source: BuyCompleted) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeNumber(source.rate);
    builder.writeNumber(source.txId);
    return builder.build();
}

export function dictValueParserBuyCompleted(): DictionaryValue<BuyCompleted> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBuyCompleted(src)).endCell());
        },
        parse: (src) => {
            return loadBuyCompleted(src.loadRef().beginParse());
        }
    }
}

export type SellerAddedToPool = {
    $$type: 'SellerAddedToPool';
    rate: bigint;
    seller: Seller;
    txId: bigint;
}

export function storeSellerAddedToPool(src: SellerAddedToPool) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(4045869237, 32);
        b_0.storeInt(src.rate, 257);
        b_0.store(storeSeller(src.seller));
        const b_1 = new Builder();
        b_1.storeInt(src.txId, 257);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadSellerAddedToPool(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 4045869237) { throw Error('Invalid prefix'); }
    const _rate = sc_0.loadIntBig(257);
    const _seller = loadSeller(sc_0);
    const sc_1 = sc_0.loadRef().beginParse();
    const _txId = sc_1.loadIntBig(257);
    return { $$type: 'SellerAddedToPool' as const, rate: _rate, seller: _seller, txId: _txId };
}

export function loadTupleSellerAddedToPool(source: TupleReader) {
    const _rate = source.readBigNumber();
    const _seller = loadTupleSeller(source);
    const _txId = source.readBigNumber();
    return { $$type: 'SellerAddedToPool' as const, rate: _rate, seller: _seller, txId: _txId };
}

export function loadGetterTupleSellerAddedToPool(source: TupleReader) {
    const _rate = source.readBigNumber();
    const _seller = loadGetterTupleSeller(source);
    const _txId = source.readBigNumber();
    return { $$type: 'SellerAddedToPool' as const, rate: _rate, seller: _seller, txId: _txId };
}

export function storeTupleSellerAddedToPool(source: SellerAddedToPool) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.rate);
    builder.writeTuple(storeTupleSeller(source.seller));
    builder.writeNumber(source.txId);
    return builder.build();
}

export function dictValueParserSellerAddedToPool(): DictionaryValue<SellerAddedToPool> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSellerAddedToPool(src)).endCell());
        },
        parse: (src) => {
            return loadSellerAddedToPool(src.loadRef().beginParse());
        }
    }
}

export type ListingCancelled = {
    $$type: 'ListingCancelled';
    seller: Address;
    rate: bigint;
    amount: bigint;
    txId: bigint;
}

export function storeListingCancelled(src: ListingCancelled) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1614679801, 32);
        b_0.storeAddress(src.seller);
        b_0.storeInt(src.rate, 257);
        b_0.storeInt(src.amount, 257);
        const b_1 = new Builder();
        b_1.storeInt(src.txId, 257);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadListingCancelled(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1614679801) { throw Error('Invalid prefix'); }
    const _seller = sc_0.loadAddress();
    const _rate = sc_0.loadIntBig(257);
    const _amount = sc_0.loadIntBig(257);
    const sc_1 = sc_0.loadRef().beginParse();
    const _txId = sc_1.loadIntBig(257);
    return { $$type: 'ListingCancelled' as const, seller: _seller, rate: _rate, amount: _amount, txId: _txId };
}

export function loadTupleListingCancelled(source: TupleReader) {
    const _seller = source.readAddress();
    const _rate = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _txId = source.readBigNumber();
    return { $$type: 'ListingCancelled' as const, seller: _seller, rate: _rate, amount: _amount, txId: _txId };
}

export function loadGetterTupleListingCancelled(source: TupleReader) {
    const _seller = source.readAddress();
    const _rate = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _txId = source.readBigNumber();
    return { $$type: 'ListingCancelled' as const, seller: _seller, rate: _rate, amount: _amount, txId: _txId };
}

export function storeTupleListingCancelled(source: ListingCancelled) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.seller);
    builder.writeNumber(source.rate);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.txId);
    return builder.build();
}

export function dictValueParserListingCancelled(): DictionaryValue<ListingCancelled> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeListingCancelled(src)).endCell());
        },
        parse: (src) => {
            return loadListingCancelled(src.loadRef().beginParse());
        }
    }
}

export type Cancellisting = {
    $$type: 'Cancellisting';
    payload: Slice;
}

export function storeCancellisting(src: Cancellisting) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1027964760, 32);
        b_0.storeRef(src.payload.asCell());
    };
}

export function loadCancellisting(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1027964760) { throw Error('Invalid prefix'); }
    const _payload = sc_0.loadRef().asSlice();
    return { $$type: 'Cancellisting' as const, payload: _payload };
}

export function loadTupleCancellisting(source: TupleReader) {
    const _payload = source.readCell().asSlice();
    return { $$type: 'Cancellisting' as const, payload: _payload };
}

export function loadGetterTupleCancellisting(source: TupleReader) {
    const _payload = source.readCell().asSlice();
    return { $$type: 'Cancellisting' as const, payload: _payload };
}

export function storeTupleCancellisting(source: Cancellisting) {
    const builder = new TupleBuilder();
    builder.writeSlice(source.payload.asCell());
    return builder.build();
}

export function dictValueParserCancellisting(): DictionaryValue<Cancellisting> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCancellisting(src)).endCell());
        },
        parse: (src) => {
            return loadCancellisting(src.loadRef().beginParse());
        }
    }
}

export type ClaimDailyTasks = {
    $$type: 'ClaimDailyTasks';
    signature: Slice;
    nonce: bigint;
    taskNum: bigint;
}

export function storeClaimDailyTasks(src: ClaimDailyTasks) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1732588062, 32);
        b_0.storeRef(src.signature.asCell());
        b_0.storeUint(src.nonce, 64);
        b_0.storeUint(src.taskNum, 64);
    };
}

export function loadClaimDailyTasks(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1732588062) { throw Error('Invalid prefix'); }
    const _signature = sc_0.loadRef().asSlice();
    const _nonce = sc_0.loadUintBig(64);
    const _taskNum = sc_0.loadUintBig(64);
    return { $$type: 'ClaimDailyTasks' as const, signature: _signature, nonce: _nonce, taskNum: _taskNum };
}

export function loadTupleClaimDailyTasks(source: TupleReader) {
    const _signature = source.readCell().asSlice();
    const _nonce = source.readBigNumber();
    const _taskNum = source.readBigNumber();
    return { $$type: 'ClaimDailyTasks' as const, signature: _signature, nonce: _nonce, taskNum: _taskNum };
}

export function loadGetterTupleClaimDailyTasks(source: TupleReader) {
    const _signature = source.readCell().asSlice();
    const _nonce = source.readBigNumber();
    const _taskNum = source.readBigNumber();
    return { $$type: 'ClaimDailyTasks' as const, signature: _signature, nonce: _nonce, taskNum: _taskNum };
}

export function storeTupleClaimDailyTasks(source: ClaimDailyTasks) {
    const builder = new TupleBuilder();
    builder.writeSlice(source.signature.asCell());
    builder.writeNumber(source.nonce);
    builder.writeNumber(source.taskNum);
    return builder.build();
}

export function dictValueParserClaimDailyTasks(): DictionaryValue<ClaimDailyTasks> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaimDailyTasks(src)).endCell());
        },
        parse: (src) => {
            return loadClaimDailyTasks(src.loadRef().beginParse());
        }
    }
}

export type ClaimOnboardingRewards = {
    $$type: 'ClaimOnboardingRewards';
    signature: Slice;
    nonce: bigint;
}

export function storeClaimOnboardingRewards(src: ClaimOnboardingRewards) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(4097662005, 32);
        b_0.storeRef(src.signature.asCell());
        b_0.storeUint(src.nonce, 64);
    };
}

export function loadClaimOnboardingRewards(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 4097662005) { throw Error('Invalid prefix'); }
    const _signature = sc_0.loadRef().asSlice();
    const _nonce = sc_0.loadUintBig(64);
    return { $$type: 'ClaimOnboardingRewards' as const, signature: _signature, nonce: _nonce };
}

export function loadTupleClaimOnboardingRewards(source: TupleReader) {
    const _signature = source.readCell().asSlice();
    const _nonce = source.readBigNumber();
    return { $$type: 'ClaimOnboardingRewards' as const, signature: _signature, nonce: _nonce };
}

export function loadGetterTupleClaimOnboardingRewards(source: TupleReader) {
    const _signature = source.readCell().asSlice();
    const _nonce = source.readBigNumber();
    return { $$type: 'ClaimOnboardingRewards' as const, signature: _signature, nonce: _nonce };
}

export function storeTupleClaimOnboardingRewards(source: ClaimOnboardingRewards) {
    const builder = new TupleBuilder();
    builder.writeSlice(source.signature.asCell());
    builder.writeNumber(source.nonce);
    return builder.build();
}

export function dictValueParserClaimOnboardingRewards(): DictionaryValue<ClaimOnboardingRewards> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaimOnboardingRewards(src)).endCell());
        },
        parse: (src) => {
            return loadClaimOnboardingRewards(src.loadRef().beginParse());
        }
    }
}

export type SendTaskReward = {
    $$type: 'SendTaskReward';
    recipient: Address;
    amount: bigint;
}

export function storeSendTaskReward(src: SendTaskReward) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(997213079, 32);
        b_0.storeAddress(src.recipient);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadSendTaskReward(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 997213079) { throw Error('Invalid prefix'); }
    const _recipient = sc_0.loadAddress();
    const _amount = sc_0.loadIntBig(257);
    return { $$type: 'SendTaskReward' as const, recipient: _recipient, amount: _amount };
}

export function loadTupleSendTaskReward(source: TupleReader) {
    const _recipient = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'SendTaskReward' as const, recipient: _recipient, amount: _amount };
}

export function loadGetterTupleSendTaskReward(source: TupleReader) {
    const _recipient = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'SendTaskReward' as const, recipient: _recipient, amount: _amount };
}

export function storeTupleSendTaskReward(source: SendTaskReward) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.recipient);
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserSendTaskReward(): DictionaryValue<SendTaskReward> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendTaskReward(src)).endCell());
        },
        parse: (src) => {
            return loadSendTaskReward(src.loadRef().beginParse());
        }
    }
}

export type SentTaskReward = {
    $$type: 'SentTaskReward';
    recipient: Address;
    amount: bigint;
}

export function storeSentTaskReward(src: SentTaskReward) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2139210137, 32);
        b_0.storeAddress(src.recipient);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadSentTaskReward(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2139210137) { throw Error('Invalid prefix'); }
    const _recipient = sc_0.loadAddress();
    const _amount = sc_0.loadIntBig(257);
    return { $$type: 'SentTaskReward' as const, recipient: _recipient, amount: _amount };
}

export function loadTupleSentTaskReward(source: TupleReader) {
    const _recipient = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'SentTaskReward' as const, recipient: _recipient, amount: _amount };
}

export function loadGetterTupleSentTaskReward(source: TupleReader) {
    const _recipient = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'SentTaskReward' as const, recipient: _recipient, amount: _amount };
}

export function storeTupleSentTaskReward(source: SentTaskReward) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.recipient);
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserSentTaskReward(): DictionaryValue<SentTaskReward> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSentTaskReward(src)).endCell());
        },
        parse: (src) => {
            return loadSentTaskReward(src.loadRef().beginParse());
        }
    }
}

export type SendOnboardingReward = {
    $$type: 'SendOnboardingReward';
    recipient: Address;
    zipp: bigint;
    oreva: bigint;
}

export function storeSendOnboardingReward(src: SendOnboardingReward) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(511387795, 32);
        b_0.storeAddress(src.recipient);
        b_0.storeInt(src.zipp, 257);
        b_0.storeInt(src.oreva, 257);
    };
}

export function loadSendOnboardingReward(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 511387795) { throw Error('Invalid prefix'); }
    const _recipient = sc_0.loadAddress();
    const _zipp = sc_0.loadIntBig(257);
    const _oreva = sc_0.loadIntBig(257);
    return { $$type: 'SendOnboardingReward' as const, recipient: _recipient, zipp: _zipp, oreva: _oreva };
}

export function loadTupleSendOnboardingReward(source: TupleReader) {
    const _recipient = source.readAddress();
    const _zipp = source.readBigNumber();
    const _oreva = source.readBigNumber();
    return { $$type: 'SendOnboardingReward' as const, recipient: _recipient, zipp: _zipp, oreva: _oreva };
}

export function loadGetterTupleSendOnboardingReward(source: TupleReader) {
    const _recipient = source.readAddress();
    const _zipp = source.readBigNumber();
    const _oreva = source.readBigNumber();
    return { $$type: 'SendOnboardingReward' as const, recipient: _recipient, zipp: _zipp, oreva: _oreva };
}

export function storeTupleSendOnboardingReward(source: SendOnboardingReward) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.recipient);
    builder.writeNumber(source.zipp);
    builder.writeNumber(source.oreva);
    return builder.build();
}

export function dictValueParserSendOnboardingReward(): DictionaryValue<SendOnboardingReward> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendOnboardingReward(src)).endCell());
        },
        parse: (src) => {
            return loadSendOnboardingReward(src.loadRef().beginParse());
        }
    }
}

export type SentOnboardingReward = {
    $$type: 'SentOnboardingReward';
    recipient: Address;
}

export function storeSentOnboardingReward(src: SentOnboardingReward) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1492481023, 32);
        b_0.storeAddress(src.recipient);
    };
}

export function loadSentOnboardingReward(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1492481023) { throw Error('Invalid prefix'); }
    const _recipient = sc_0.loadAddress();
    return { $$type: 'SentOnboardingReward' as const, recipient: _recipient };
}

export function loadTupleSentOnboardingReward(source: TupleReader) {
    const _recipient = source.readAddress();
    return { $$type: 'SentOnboardingReward' as const, recipient: _recipient };
}

export function loadGetterTupleSentOnboardingReward(source: TupleReader) {
    const _recipient = source.readAddress();
    return { $$type: 'SentOnboardingReward' as const, recipient: _recipient };
}

export function storeTupleSentOnboardingReward(source: SentOnboardingReward) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.recipient);
    return builder.build();
}

export function dictValueParserSentOnboardingReward(): DictionaryValue<SentOnboardingReward> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSentOnboardingReward(src)).endCell());
        },
        parse: (src) => {
            return loadSentOnboardingReward(src.loadRef().beginParse());
        }
    }
}

export type TaskRewardClaimed = {
    $$type: 'TaskRewardClaimed';
    user: Address;
    amount: bigint;
    totalClaimed: bigint;
}

export function storeTaskRewardClaimed(src: TaskRewardClaimed) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(4031683821, 32);
        b_0.storeAddress(src.user);
        b_0.storeInt(src.amount, 257);
        b_0.storeInt(src.totalClaimed, 257);
    };
}

export function loadTaskRewardClaimed(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 4031683821) { throw Error('Invalid prefix'); }
    const _user = sc_0.loadAddress();
    const _amount = sc_0.loadIntBig(257);
    const _totalClaimed = sc_0.loadIntBig(257);
    return { $$type: 'TaskRewardClaimed' as const, user: _user, amount: _amount, totalClaimed: _totalClaimed };
}

export function loadTupleTaskRewardClaimed(source: TupleReader) {
    const _user = source.readAddress();
    const _amount = source.readBigNumber();
    const _totalClaimed = source.readBigNumber();
    return { $$type: 'TaskRewardClaimed' as const, user: _user, amount: _amount, totalClaimed: _totalClaimed };
}

export function loadGetterTupleTaskRewardClaimed(source: TupleReader) {
    const _user = source.readAddress();
    const _amount = source.readBigNumber();
    const _totalClaimed = source.readBigNumber();
    return { $$type: 'TaskRewardClaimed' as const, user: _user, amount: _amount, totalClaimed: _totalClaimed };
}

export function storeTupleTaskRewardClaimed(source: TaskRewardClaimed) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.user);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.totalClaimed);
    return builder.build();
}

export function dictValueParserTaskRewardClaimed(): DictionaryValue<TaskRewardClaimed> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTaskRewardClaimed(src)).endCell());
        },
        parse: (src) => {
            return loadTaskRewardClaimed(src.loadRef().beginParse());
        }
    }
}

export type OnBoardingRewardsClaimed = {
    $$type: 'OnBoardingRewardsClaimed';
    recipient: Address;
}

export function storeOnBoardingRewardsClaimed(src: OnBoardingRewardsClaimed) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(428238222, 32);
        b_0.storeAddress(src.recipient);
    };
}

export function loadOnBoardingRewardsClaimed(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 428238222) { throw Error('Invalid prefix'); }
    const _recipient = sc_0.loadAddress();
    return { $$type: 'OnBoardingRewardsClaimed' as const, recipient: _recipient };
}

export function loadTupleOnBoardingRewardsClaimed(source: TupleReader) {
    const _recipient = source.readAddress();
    return { $$type: 'OnBoardingRewardsClaimed' as const, recipient: _recipient };
}

export function loadGetterTupleOnBoardingRewardsClaimed(source: TupleReader) {
    const _recipient = source.readAddress();
    return { $$type: 'OnBoardingRewardsClaimed' as const, recipient: _recipient };
}

export function storeTupleOnBoardingRewardsClaimed(source: OnBoardingRewardsClaimed) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.recipient);
    return builder.build();
}

export function dictValueParserOnBoardingRewardsClaimed(): DictionaryValue<OnBoardingRewardsClaimed> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeOnBoardingRewardsClaimed(src)).endCell());
        },
        parse: (src) => {
            return loadOnBoardingRewardsClaimed(src.loadRef().beginParse());
        }
    }
}

export type ResetTask = {
    $$type: 'ResetTask';
}

export function storeResetTask(src: ResetTask) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2614433684, 32);
    };
}

export function loadResetTask(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2614433684) { throw Error('Invalid prefix'); }
    return { $$type: 'ResetTask' as const };
}

export function loadTupleResetTask(source: TupleReader) {
    return { $$type: 'ResetTask' as const };
}

export function loadGetterTupleResetTask(source: TupleReader) {
    return { $$type: 'ResetTask' as const };
}

export function storeTupleResetTask(source: ResetTask) {
    const builder = new TupleBuilder();
    return builder.build();
}

export function dictValueParserResetTask(): DictionaryValue<ResetTask> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeResetTask(src)).endCell());
        },
        parse: (src) => {
            return loadResetTask(src.loadRef().beginParse());
        }
    }
}

export type ElixirPurchased = {
    $$type: 'ElixirPurchased';
    user: Address;
    amount: bigint;
    txId: bigint;
}

export function storeElixirPurchased(src: ElixirPurchased) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(270263841, 32);
        b_0.storeAddress(src.user);
        b_0.storeCoins(src.amount);
        b_0.storeUint(src.txId, 64);
    };
}

export function loadElixirPurchased(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 270263841) { throw Error('Invalid prefix'); }
    const _user = sc_0.loadAddress();
    const _amount = sc_0.loadCoins();
    const _txId = sc_0.loadUintBig(64);
    return { $$type: 'ElixirPurchased' as const, user: _user, amount: _amount, txId: _txId };
}

export function loadTupleElixirPurchased(source: TupleReader) {
    const _user = source.readAddress();
    const _amount = source.readBigNumber();
    const _txId = source.readBigNumber();
    return { $$type: 'ElixirPurchased' as const, user: _user, amount: _amount, txId: _txId };
}

export function loadGetterTupleElixirPurchased(source: TupleReader) {
    const _user = source.readAddress();
    const _amount = source.readBigNumber();
    const _txId = source.readBigNumber();
    return { $$type: 'ElixirPurchased' as const, user: _user, amount: _amount, txId: _txId };
}

export function storeTupleElixirPurchased(source: ElixirPurchased) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.user);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.txId);
    return builder.build();
}

export function dictValueParserElixirPurchased(): DictionaryValue<ElixirPurchased> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeElixirPurchased(src)).endCell());
        },
        parse: (src) => {
            return loadElixirPurchased(src.loadRef().beginParse());
        }
    }
}

export type SellersBadgePurchased = {
    $$type: 'SellersBadgePurchased';
    user: Address;
    amount: bigint;
    txId: bigint;
}

export function storeSellersBadgePurchased(src: SellersBadgePurchased) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2075559686, 32);
        b_0.storeAddress(src.user);
        b_0.storeCoins(src.amount);
        b_0.storeUint(src.txId, 64);
    };
}

export function loadSellersBadgePurchased(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2075559686) { throw Error('Invalid prefix'); }
    const _user = sc_0.loadAddress();
    const _amount = sc_0.loadCoins();
    const _txId = sc_0.loadUintBig(64);
    return { $$type: 'SellersBadgePurchased' as const, user: _user, amount: _amount, txId: _txId };
}

export function loadTupleSellersBadgePurchased(source: TupleReader) {
    const _user = source.readAddress();
    const _amount = source.readBigNumber();
    const _txId = source.readBigNumber();
    return { $$type: 'SellersBadgePurchased' as const, user: _user, amount: _amount, txId: _txId };
}

export function loadGetterTupleSellersBadgePurchased(source: TupleReader) {
    const _user = source.readAddress();
    const _amount = source.readBigNumber();
    const _txId = source.readBigNumber();
    return { $$type: 'SellersBadgePurchased' as const, user: _user, amount: _amount, txId: _txId };
}

export function storeTupleSellersBadgePurchased(source: SellersBadgePurchased) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.user);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.txId);
    return builder.build();
}

export function dictValueParserSellersBadgePurchased(): DictionaryValue<SellersBadgePurchased> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSellersBadgePurchased(src)).endCell());
        },
        parse: (src) => {
            return loadSellersBadgePurchased(src.loadRef().beginParse());
        }
    }
}

export type WithdrawZipp = {
    $$type: 'WithdrawZipp';
    recipient: Address;
    amount: bigint;
}

export function storeWithdrawZipp(src: WithdrawZipp) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2962522601, 32);
        b_0.storeAddress(src.recipient);
        b_0.storeCoins(src.amount);
    };
}

export function loadWithdrawZipp(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2962522601) { throw Error('Invalid prefix'); }
    const _recipient = sc_0.loadAddress();
    const _amount = sc_0.loadCoins();
    return { $$type: 'WithdrawZipp' as const, recipient: _recipient, amount: _amount };
}

export function loadTupleWithdrawZipp(source: TupleReader) {
    const _recipient = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'WithdrawZipp' as const, recipient: _recipient, amount: _amount };
}

export function loadGetterTupleWithdrawZipp(source: TupleReader) {
    const _recipient = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'WithdrawZipp' as const, recipient: _recipient, amount: _amount };
}

export function storeTupleWithdrawZipp(source: WithdrawZipp) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.recipient);
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserWithdrawZipp(): DictionaryValue<WithdrawZipp> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeWithdrawZipp(src)).endCell());
        },
        parse: (src) => {
            return loadWithdrawZipp(src.loadRef().beginParse());
        }
    }
}

export type WithdrawHubbTon = {
    $$type: 'WithdrawHubbTon';
    amount: bigint;
}

export function storeWithdrawHubbTon(src: WithdrawHubbTon) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2460169974, 32);
        b_0.storeCoins(src.amount);
    };
}

export function loadWithdrawHubbTon(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2460169974) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    return { $$type: 'WithdrawHubbTon' as const, amount: _amount };
}

export function loadTupleWithdrawHubbTon(source: TupleReader) {
    const _amount = source.readBigNumber();
    return { $$type: 'WithdrawHubbTon' as const, amount: _amount };
}

export function loadGetterTupleWithdrawHubbTon(source: TupleReader) {
    const _amount = source.readBigNumber();
    return { $$type: 'WithdrawHubbTon' as const, amount: _amount };
}

export function storeTupleWithdrawHubbTon(source: WithdrawHubbTon) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserWithdrawHubbTon(): DictionaryValue<WithdrawHubbTon> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeWithdrawHubbTon(src)).endCell());
        },
        parse: (src) => {
            return loadWithdrawHubbTon(src.loadRef().beginParse());
        }
    }
}

export type LogEventMintRecord = {
    $$type: 'LogEventMintRecord';
    minter: Address;
    item_id: bigint;
    generate_number: bigint;
}

export function storeLogEventMintRecord(src: LogEventMintRecord) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2743565669, 32);
        b_0.storeAddress(src.minter);
        b_0.storeInt(src.item_id, 257);
        b_0.storeInt(src.generate_number, 257);
    };
}

export function loadLogEventMintRecord(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2743565669) { throw Error('Invalid prefix'); }
    const _minter = sc_0.loadAddress();
    const _item_id = sc_0.loadIntBig(257);
    const _generate_number = sc_0.loadIntBig(257);
    return { $$type: 'LogEventMintRecord' as const, minter: _minter, item_id: _item_id, generate_number: _generate_number };
}

export function loadTupleLogEventMintRecord(source: TupleReader) {
    const _minter = source.readAddress();
    const _item_id = source.readBigNumber();
    const _generate_number = source.readBigNumber();
    return { $$type: 'LogEventMintRecord' as const, minter: _minter, item_id: _item_id, generate_number: _generate_number };
}

export function loadGetterTupleLogEventMintRecord(source: TupleReader) {
    const _minter = source.readAddress();
    const _item_id = source.readBigNumber();
    const _generate_number = source.readBigNumber();
    return { $$type: 'LogEventMintRecord' as const, minter: _minter, item_id: _item_id, generate_number: _generate_number };
}

export function storeTupleLogEventMintRecord(source: LogEventMintRecord) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.minter);
    builder.writeNumber(source.item_id);
    builder.writeNumber(source.generate_number);
    return builder.build();
}

export function dictValueParserLogEventMintRecord(): DictionaryValue<LogEventMintRecord> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeLogEventMintRecord(src)).endCell());
        },
        parse: (src) => {
            return loadLogEventMintRecord(src.loadRef().beginParse());
        }
    }
}

export type GetRoyaltyParams = {
    $$type: 'GetRoyaltyParams';
    query_id: bigint;
}

export function storeGetRoyaltyParams(src: GetRoyaltyParams) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1765620048, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadGetRoyaltyParams(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1765620048) { throw Error('Invalid prefix'); }
    const _query_id = sc_0.loadUintBig(64);
    return { $$type: 'GetRoyaltyParams' as const, query_id: _query_id };
}

export function loadTupleGetRoyaltyParams(source: TupleReader) {
    const _query_id = source.readBigNumber();
    return { $$type: 'GetRoyaltyParams' as const, query_id: _query_id };
}

export function loadGetterTupleGetRoyaltyParams(source: TupleReader) {
    const _query_id = source.readBigNumber();
    return { $$type: 'GetRoyaltyParams' as const, query_id: _query_id };
}

export function storeTupleGetRoyaltyParams(source: GetRoyaltyParams) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

export function dictValueParserGetRoyaltyParams(): DictionaryValue<GetRoyaltyParams> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeGetRoyaltyParams(src)).endCell());
        },
        parse: (src) => {
            return loadGetRoyaltyParams(src.loadRef().beginParse());
        }
    }
}

export type ReportRoyaltyParams = {
    $$type: 'ReportRoyaltyParams';
    query_id: bigint;
    numerator: bigint;
    denominator: bigint;
    destination: Address;
}

export function storeReportRoyaltyParams(src: ReportRoyaltyParams) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2831876269, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeUint(src.numerator, 16);
        b_0.storeUint(src.denominator, 16);
        b_0.storeAddress(src.destination);
    };
}

export function loadReportRoyaltyParams(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2831876269) { throw Error('Invalid prefix'); }
    const _query_id = sc_0.loadUintBig(64);
    const _numerator = sc_0.loadUintBig(16);
    const _denominator = sc_0.loadUintBig(16);
    const _destination = sc_0.loadAddress();
    return { $$type: 'ReportRoyaltyParams' as const, query_id: _query_id, numerator: _numerator, denominator: _denominator, destination: _destination };
}

export function loadTupleReportRoyaltyParams(source: TupleReader) {
    const _query_id = source.readBigNumber();
    const _numerator = source.readBigNumber();
    const _denominator = source.readBigNumber();
    const _destination = source.readAddress();
    return { $$type: 'ReportRoyaltyParams' as const, query_id: _query_id, numerator: _numerator, denominator: _denominator, destination: _destination };
}

export function loadGetterTupleReportRoyaltyParams(source: TupleReader) {
    const _query_id = source.readBigNumber();
    const _numerator = source.readBigNumber();
    const _denominator = source.readBigNumber();
    const _destination = source.readAddress();
    return { $$type: 'ReportRoyaltyParams' as const, query_id: _query_id, numerator: _numerator, denominator: _denominator, destination: _destination };
}

export function storeTupleReportRoyaltyParams(source: ReportRoyaltyParams) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.numerator);
    builder.writeNumber(source.denominator);
    builder.writeAddress(source.destination);
    return builder.build();
}

export function dictValueParserReportRoyaltyParams(): DictionaryValue<ReportRoyaltyParams> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeReportRoyaltyParams(src)).endCell());
        },
        parse: (src) => {
            return loadReportRoyaltyParams(src.loadRef().beginParse());
        }
    }
}

export type CollectionData = {
    $$type: 'CollectionData';
    next_item_index: bigint;
    collection_content: Cell;
    owner_address: Address;
}

export function storeCollectionData(src: CollectionData) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.next_item_index, 257);
        b_0.storeRef(src.collection_content);
        b_0.storeAddress(src.owner_address);
    };
}

export function loadCollectionData(slice: Slice) {
    const sc_0 = slice;
    const _next_item_index = sc_0.loadIntBig(257);
    const _collection_content = sc_0.loadRef();
    const _owner_address = sc_0.loadAddress();
    return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}

export function loadTupleCollectionData(source: TupleReader) {
    const _next_item_index = source.readBigNumber();
    const _collection_content = source.readCell();
    const _owner_address = source.readAddress();
    return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}

export function loadGetterTupleCollectionData(source: TupleReader) {
    const _next_item_index = source.readBigNumber();
    const _collection_content = source.readCell();
    const _owner_address = source.readAddress();
    return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}

export function storeTupleCollectionData(source: CollectionData) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.next_item_index);
    builder.writeCell(source.collection_content);
    builder.writeAddress(source.owner_address);
    return builder.build();
}

export function dictValueParserCollectionData(): DictionaryValue<CollectionData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCollectionData(src)).endCell());
        },
        parse: (src) => {
            return loadCollectionData(src.loadRef().beginParse());
        }
    }
}

export type RoyaltyParams = {
    $$type: 'RoyaltyParams';
    numerator: bigint;
    denominator: bigint;
    destination: Address;
}

export function storeRoyaltyParams(src: RoyaltyParams) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.numerator, 257);
        b_0.storeInt(src.denominator, 257);
        b_0.storeAddress(src.destination);
    };
}

export function loadRoyaltyParams(slice: Slice) {
    const sc_0 = slice;
    const _numerator = sc_0.loadIntBig(257);
    const _denominator = sc_0.loadIntBig(257);
    const _destination = sc_0.loadAddress();
    return { $$type: 'RoyaltyParams' as const, numerator: _numerator, denominator: _denominator, destination: _destination };
}

export function loadTupleRoyaltyParams(source: TupleReader) {
    const _numerator = source.readBigNumber();
    const _denominator = source.readBigNumber();
    const _destination = source.readAddress();
    return { $$type: 'RoyaltyParams' as const, numerator: _numerator, denominator: _denominator, destination: _destination };
}

export function loadGetterTupleRoyaltyParams(source: TupleReader) {
    const _numerator = source.readBigNumber();
    const _denominator = source.readBigNumber();
    const _destination = source.readAddress();
    return { $$type: 'RoyaltyParams' as const, numerator: _numerator, denominator: _denominator, destination: _destination };
}

export function storeTupleRoyaltyParams(source: RoyaltyParams) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.numerator);
    builder.writeNumber(source.denominator);
    builder.writeAddress(source.destination);
    return builder.build();
}

export function dictValueParserRoyaltyParams(): DictionaryValue<RoyaltyParams> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeRoyaltyParams(src)).endCell());
        },
        parse: (src) => {
            return loadRoyaltyParams(src.loadRef().beginParse());
        }
    }
}

export type Transfer = {
    $$type: 'Transfer';
    query_id: bigint;
    new_owner: Address;
    response_destination: Address | null;
    custom_payload: Cell | null;
    forward_amount: bigint;
    forward_payload: Slice;
}

export function storeTransfer(src: Transfer) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1607220500, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.new_owner);
        b_0.storeAddress(src.response_destination);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forward_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTransfer(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1607220500) { throw Error('Invalid prefix'); }
    const _query_id = sc_0.loadUintBig(64);
    const _new_owner = sc_0.loadAddress();
    const _response_destination = sc_0.loadMaybeAddress();
    const _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _forward_amount = sc_0.loadCoins();
    const _forward_payload = sc_0;
    return { $$type: 'Transfer' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}

export function loadTupleTransfer(source: TupleReader) {
    const _query_id = source.readBigNumber();
    const _new_owner = source.readAddress();
    const _response_destination = source.readAddressOpt();
    const _custom_payload = source.readCellOpt();
    const _forward_amount = source.readBigNumber();
    const _forward_payload = source.readCell().asSlice();
    return { $$type: 'Transfer' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}

export function loadGetterTupleTransfer(source: TupleReader) {
    const _query_id = source.readBigNumber();
    const _new_owner = source.readAddress();
    const _response_destination = source.readAddressOpt();
    const _custom_payload = source.readCellOpt();
    const _forward_amount = source.readBigNumber();
    const _forward_payload = source.readCell().asSlice();
    return { $$type: 'Transfer' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}

export function storeTupleTransfer(source: Transfer) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.new_owner);
    builder.writeAddress(source.response_destination);
    builder.writeCell(source.custom_payload);
    builder.writeNumber(source.forward_amount);
    builder.writeSlice(source.forward_payload.asCell());
    return builder.build();
}

export function dictValueParserTransfer(): DictionaryValue<Transfer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadTransfer(src.loadRef().beginParse());
        }
    }
}

export type OwnershipAssigned = {
    $$type: 'OwnershipAssigned';
    query_id: bigint;
    prev_owner: Address;
    forward_payload: Slice;
}

export function storeOwnershipAssigned(src: OwnershipAssigned) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(85167505, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.prev_owner);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadOwnershipAssigned(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 85167505) { throw Error('Invalid prefix'); }
    const _query_id = sc_0.loadUintBig(64);
    const _prev_owner = sc_0.loadAddress();
    const _forward_payload = sc_0;
    return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
}

export function loadTupleOwnershipAssigned(source: TupleReader) {
    const _query_id = source.readBigNumber();
    const _prev_owner = source.readAddress();
    const _forward_payload = source.readCell().asSlice();
    return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
}

export function loadGetterTupleOwnershipAssigned(source: TupleReader) {
    const _query_id = source.readBigNumber();
    const _prev_owner = source.readAddress();
    const _forward_payload = source.readCell().asSlice();
    return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
}

export function storeTupleOwnershipAssigned(source: OwnershipAssigned) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.prev_owner);
    builder.writeSlice(source.forward_payload.asCell());
    return builder.build();
}

export function dictValueParserOwnershipAssigned(): DictionaryValue<OwnershipAssigned> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeOwnershipAssigned(src)).endCell());
        },
        parse: (src) => {
            return loadOwnershipAssigned(src.loadRef().beginParse());
        }
    }
}

export type GetStaticData = {
    $$type: 'GetStaticData';
    query_id: bigint;
}

export function storeGetStaticData(src: GetStaticData) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(801842850, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadGetStaticData(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 801842850) { throw Error('Invalid prefix'); }
    const _query_id = sc_0.loadUintBig(64);
    return { $$type: 'GetStaticData' as const, query_id: _query_id };
}

export function loadTupleGetStaticData(source: TupleReader) {
    const _query_id = source.readBigNumber();
    return { $$type: 'GetStaticData' as const, query_id: _query_id };
}

export function loadGetterTupleGetStaticData(source: TupleReader) {
    const _query_id = source.readBigNumber();
    return { $$type: 'GetStaticData' as const, query_id: _query_id };
}

export function storeTupleGetStaticData(source: GetStaticData) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

export function dictValueParserGetStaticData(): DictionaryValue<GetStaticData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeGetStaticData(src)).endCell());
        },
        parse: (src) => {
            return loadGetStaticData(src.loadRef().beginParse());
        }
    }
}

export type ReportStaticData = {
    $$type: 'ReportStaticData';
    query_id: bigint;
    index_id: bigint;
    collection: Address;
}

export function storeReportStaticData(src: ReportStaticData) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2339837749, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeInt(src.index_id, 257);
        b_0.storeAddress(src.collection);
    };
}

export function loadReportStaticData(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2339837749) { throw Error('Invalid prefix'); }
    const _query_id = sc_0.loadUintBig(64);
    const _index_id = sc_0.loadIntBig(257);
    const _collection = sc_0.loadAddress();
    return { $$type: 'ReportStaticData' as const, query_id: _query_id, index_id: _index_id, collection: _collection };
}

export function loadTupleReportStaticData(source: TupleReader) {
    const _query_id = source.readBigNumber();
    const _index_id = source.readBigNumber();
    const _collection = source.readAddress();
    return { $$type: 'ReportStaticData' as const, query_id: _query_id, index_id: _index_id, collection: _collection };
}

export function loadGetterTupleReportStaticData(source: TupleReader) {
    const _query_id = source.readBigNumber();
    const _index_id = source.readBigNumber();
    const _collection = source.readAddress();
    return { $$type: 'ReportStaticData' as const, query_id: _query_id, index_id: _index_id, collection: _collection };
}

export function storeTupleReportStaticData(source: ReportStaticData) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.index_id);
    builder.writeAddress(source.collection);
    return builder.build();
}

export function dictValueParserReportStaticData(): DictionaryValue<ReportStaticData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeReportStaticData(src)).endCell());
        },
        parse: (src) => {
            return loadReportStaticData(src.loadRef().beginParse());
        }
    }
}

export type GetNftData = {
    $$type: 'GetNftData';
    is_initialized: boolean;
    index: bigint;
    collection_address: Address;
    owner_address: Address;
    individual_content: Cell;
}

export function storeGetNftData(src: GetNftData) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeBit(src.is_initialized);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.collection_address);
        b_0.storeAddress(src.owner_address);
        b_0.storeRef(src.individual_content);
    };
}

export function loadGetNftData(slice: Slice) {
    const sc_0 = slice;
    const _is_initialized = sc_0.loadBit();
    const _index = sc_0.loadIntBig(257);
    const _collection_address = sc_0.loadAddress();
    const _owner_address = sc_0.loadAddress();
    const _individual_content = sc_0.loadRef();
    return { $$type: 'GetNftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}

export function loadTupleGetNftData(source: TupleReader) {
    const _is_initialized = source.readBoolean();
    const _index = source.readBigNumber();
    const _collection_address = source.readAddress();
    const _owner_address = source.readAddress();
    const _individual_content = source.readCell();
    return { $$type: 'GetNftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}

export function loadGetterTupleGetNftData(source: TupleReader) {
    const _is_initialized = source.readBoolean();
    const _index = source.readBigNumber();
    const _collection_address = source.readAddress();
    const _owner_address = source.readAddress();
    const _individual_content = source.readCell();
    return { $$type: 'GetNftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}

export function storeTupleGetNftData(source: GetNftData) {
    const builder = new TupleBuilder();
    builder.writeBoolean(source.is_initialized);
    builder.writeNumber(source.index);
    builder.writeAddress(source.collection_address);
    builder.writeAddress(source.owner_address);
    builder.writeCell(source.individual_content);
    return builder.build();
}

export function dictValueParserGetNftData(): DictionaryValue<GetNftData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeGetNftData(src)).endCell());
        },
        parse: (src) => {
            return loadGetNftData(src.loadRef().beginParse());
        }
    }
}

export type NftExcesses = {
    $$type: 'NftExcesses';
    query_id: bigint;
}

export function storeNftExcesses(src: NftExcesses) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3492384691, 32);
        b_0.storeInt(src.query_id, 257);
    };
}

export function loadNftExcesses(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3492384691) { throw Error('Invalid prefix'); }
    const _query_id = sc_0.loadIntBig(257);
    return { $$type: 'NftExcesses' as const, query_id: _query_id };
}

export function loadTupleNftExcesses(source: TupleReader) {
    const _query_id = source.readBigNumber();
    return { $$type: 'NftExcesses' as const, query_id: _query_id };
}

export function loadGetterTupleNftExcesses(source: TupleReader) {
    const _query_id = source.readBigNumber();
    return { $$type: 'NftExcesses' as const, query_id: _query_id };
}

export function storeTupleNftExcesses(source: NftExcesses) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

export function dictValueParserNftExcesses(): DictionaryValue<NftExcesses> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeNftExcesses(src)).endCell());
        },
        parse: (src) => {
            return loadNftExcesses(src.loadRef().beginParse());
        }
    }
}

export type NftCollection$Data = {
    $$type: 'NftCollection$Data';
    next_item_index: bigint;
    owner_address: Address;
    royalty_params: RoyaltyParams | null;
    collection_content: Cell;
    nft_price: bigint;
    capital_mint_price: bigint;
}

export function storeNftCollection$Data(src: NftCollection$Data) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(src.next_item_index, 32);
        b_0.storeAddress(src.owner_address);
        const b_1 = new Builder();
        if (src.royalty_params !== null && src.royalty_params !== undefined) { b_1.storeBit(true); b_1.store(storeRoyaltyParams(src.royalty_params)); } else { b_1.storeBit(false); }
        b_1.storeRef(src.collection_content);
        const b_2 = new Builder();
        b_2.storeInt(src.nft_price, 257);
        b_2.storeInt(src.capital_mint_price, 257);
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadNftCollection$Data(slice: Slice) {
    const sc_0 = slice;
    const _next_item_index = sc_0.loadUintBig(32);
    const _owner_address = sc_0.loadAddress();
    const sc_1 = sc_0.loadRef().beginParse();
    const _royalty_params = sc_1.loadBit() ? loadRoyaltyParams(sc_1) : null;
    const _collection_content = sc_1.loadRef();
    const sc_2 = sc_1.loadRef().beginParse();
    const _nft_price = sc_2.loadIntBig(257);
    const _capital_mint_price = sc_2.loadIntBig(257);
    return { $$type: 'NftCollection$Data' as const, next_item_index: _next_item_index, owner_address: _owner_address, royalty_params: _royalty_params, collection_content: _collection_content, nft_price: _nft_price, capital_mint_price: _capital_mint_price };
}

export function loadTupleNftCollection$Data(source: TupleReader) {
    const _next_item_index = source.readBigNumber();
    const _owner_address = source.readAddress();
    const _royalty_params_p = source.readTupleOpt();
    const _royalty_params = _royalty_params_p ? loadTupleRoyaltyParams(_royalty_params_p) : null;
    const _collection_content = source.readCell();
    const _nft_price = source.readBigNumber();
    const _capital_mint_price = source.readBigNumber();
    return { $$type: 'NftCollection$Data' as const, next_item_index: _next_item_index, owner_address: _owner_address, royalty_params: _royalty_params, collection_content: _collection_content, nft_price: _nft_price, capital_mint_price: _capital_mint_price };
}

export function loadGetterTupleNftCollection$Data(source: TupleReader) {
    const _next_item_index = source.readBigNumber();
    const _owner_address = source.readAddress();
    const _royalty_params_p = source.readTupleOpt();
    const _royalty_params = _royalty_params_p ? loadTupleRoyaltyParams(_royalty_params_p) : null;
    const _collection_content = source.readCell();
    const _nft_price = source.readBigNumber();
    const _capital_mint_price = source.readBigNumber();
    return { $$type: 'NftCollection$Data' as const, next_item_index: _next_item_index, owner_address: _owner_address, royalty_params: _royalty_params, collection_content: _collection_content, nft_price: _nft_price, capital_mint_price: _capital_mint_price };
}

export function storeTupleNftCollection$Data(source: NftCollection$Data) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.next_item_index);
    builder.writeAddress(source.owner_address);
    if (source.royalty_params !== null && source.royalty_params !== undefined) {
        builder.writeTuple(storeTupleRoyaltyParams(source.royalty_params));
    } else {
        builder.writeTuple(null);
    }
    builder.writeCell(source.collection_content);
    builder.writeNumber(source.nft_price);
    builder.writeNumber(source.capital_mint_price);
    return builder.build();
}

export function dictValueParserNftCollection$Data(): DictionaryValue<NftCollection$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeNftCollection$Data(src)).endCell());
        },
        parse: (src) => {
            return loadNftCollection$Data(src.loadRef().beginParse());
        }
    }
}

export type NftItem$Data = {
    $$type: 'NftItem$Data';
    collection_address: Address;
    item_index: bigint;
    is_initialized: boolean;
    owner: Address | null;
    individual_content: Cell | null;
}

export function storeNftItem$Data(src: NftItem$Data) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.collection_address);
        b_0.storeInt(src.item_index, 257);
        b_0.storeBit(src.is_initialized);
        b_0.storeAddress(src.owner);
        if (src.individual_content !== null && src.individual_content !== undefined) { b_0.storeBit(true).storeRef(src.individual_content); } else { b_0.storeBit(false); }
    };
}

export function loadNftItem$Data(slice: Slice) {
    const sc_0 = slice;
    const _collection_address = sc_0.loadAddress();
    const _item_index = sc_0.loadIntBig(257);
    const _is_initialized = sc_0.loadBit();
    const _owner = sc_0.loadMaybeAddress();
    const _individual_content = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'NftItem$Data' as const, collection_address: _collection_address, item_index: _item_index, is_initialized: _is_initialized, owner: _owner, individual_content: _individual_content };
}

export function loadTupleNftItem$Data(source: TupleReader) {
    const _collection_address = source.readAddress();
    const _item_index = source.readBigNumber();
    const _is_initialized = source.readBoolean();
    const _owner = source.readAddressOpt();
    const _individual_content = source.readCellOpt();
    return { $$type: 'NftItem$Data' as const, collection_address: _collection_address, item_index: _item_index, is_initialized: _is_initialized, owner: _owner, individual_content: _individual_content };
}

export function loadGetterTupleNftItem$Data(source: TupleReader) {
    const _collection_address = source.readAddress();
    const _item_index = source.readBigNumber();
    const _is_initialized = source.readBoolean();
    const _owner = source.readAddressOpt();
    const _individual_content = source.readCellOpt();
    return { $$type: 'NftItem$Data' as const, collection_address: _collection_address, item_index: _item_index, is_initialized: _is_initialized, owner: _owner, individual_content: _individual_content };
}

export function storeTupleNftItem$Data(source: NftItem$Data) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.collection_address);
    builder.writeNumber(source.item_index);
    builder.writeBoolean(source.is_initialized);
    builder.writeAddress(source.owner);
    builder.writeCell(source.individual_content);
    return builder.build();
}

export function dictValueParserNftItem$Data(): DictionaryValue<NftItem$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeNftItem$Data(src)).endCell());
        },
        parse: (src) => {
            return loadNftItem$Data(src.loadRef().beginParse());
        }
    }
}

 type NftCollection_init_args = {
    $$type: 'NftCollection_init_args';
    owner_address: Address;
    collection_content: Cell;
    royalty_params: RoyaltyParams;
    nft_price: bigint;
    capital_mint_price: bigint;
}

function initNftCollection_init_args(src: NftCollection_init_args) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.owner_address);
        b_0.storeRef(src.collection_content);
        const b_1 = new Builder();
        b_1.store(storeRoyaltyParams(src.royalty_params));
        const b_2 = new Builder();
        b_2.storeInt(src.nft_price, 257);
        b_2.storeInt(src.capital_mint_price, 257);
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

async function NftCollection_init(owner_address: Address, collection_content: Cell, royalty_params: RoyaltyParams, nft_price: bigint, capital_mint_price: bigint) {
    const __code = Cell.fromHex('b5ee9c7241023501000da5000262ff008e88f4a413f4bcf2c80bed53208e9c30eda2edfb01d072d721d200d200fa4021103450666f04f86102f862e1ed43d901190202710213020120030c020120040a020148050701f9ac3a76a268690000c71ae98ffd206a00e8690000c708408080eb80408080eb807d202a903781c8b6f100ea6a1868408080eb80408080eb801808230822b60b471d7d206a6a00e8408080eb80408080eb807d202a9001ea1868408080eb80408080eb8018082b882b081a081183e8aa82a821b801b781a81982a20a7140060108db3c6c611e01f9adaef6a268690000c71ae98ffd206a00e8690000c708408080eb80408080eb807d202a903781c8b6f100ea6a1868408080eb80408080eb801808230822b60b471d7d206a6a00e8408080eb80408080eb807d202a9001ea1868408080eb80408080eb8018082b882b081a081183e8aa82a821b801b781a81982a20a714008010c5515db3c6c6109013e31c86f00016f8c6d6f8c01d0db3c6f2201c993216eb396016f2259ccc9e8312901f9b796dda89a1a400031c6ba63ff481a803a1a400031c21020203ae01020203ae01f480aa40de0722dbc403a9a861a1020203ae01020203ae0060208c208ad82d1c75f481a9a803a1020203ae01020203ae01f480aa4007a861a1020203ae01020203ae006020ae20ac206820460fa2aa0aa086e006de06a0660a8829c500b010c5505db3c6c62240201200d1001f9b5dafda89a1a400031c6ba63ff481a803a1a400031c21020203ae01020203ae01f480aa40de0722dbc403a9a861a1020203ae01020203ae0060208c208ad82d1c75f481a9a803a1020203ae01020203ae01f480aa4007a861a1020203ae01020203ae006020ae20ac206820460fa2aa0aa086e006de06a0660a8829c500e0108db3c6c630f001023206ef2d0806f2301f9b4f47da89a1a400031c6ba63ff481a803a1a400031c21020203ae01020203ae01f480aa40de0722dbc403a9a861a1020203ae01020203ae0060208c208ad82d1c75f481a9a803a1020203ae01020203ae01f480aa4007a861a1020203ae01020203ae006020ae20ac206820460fa2aa0aa086e006de06a0660a8829c5011010c5505db3c6c6112015edb3c705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d024020162141601f9b2423b5134348000638d74c7fe90350074348000638420404075c020404075c03e9015481bc0e45b788075350c3420404075c020404075c00c041184115b05a38ebe903535007420404075c020404075c03e90154800f50c3420404075c020404075c00c0415c415840d0408c1f455415410dc00dbc0d40cc1510538a0150108db3c6c612001f9b016fb5134348000638d74c7fe90350074348000638420404075c020404075c03e9015481bc0e45b788075350c3420404075c020404075c00c041184115b05a38ebe903535007420404075c020404075c03e90154800f50c3420404075c020404075c00c0415c415840d0408c1f455415410dc00dbc0d40cc1510538a0170108db3c6c63180264c86f00016f8c6d6f8c23d0db3c8bd6d657461646174612e6a736f6e8db3c6f2201c993216eb396016f2259ccc9e831546661292901feed44d0d200018e35d31ffa40d401d0d200018e10810101d700810101d700fa4055206f03916de201d4d430d0810101d700810101d70030104610456c168e3afa40d4d401d0810101d700810101d700fa40552003d430d0810101d700810101d70030105710561034102307d15505504370036f035033054414e207925f07e01a04cc25d749c21f8e8e05d31f018210693d3950bae30205de05f9012082f05919afa6998886280924b765935e06a7933e95deadbd426d2a9ed343fc39b233bae3022082f01a051f34545326574c40b78be5e99f6ad414a244cc97671de178ce36fd1d023abae302201b1d1f2101f4d33f30f8416f2410235f037080407026206ef2d0806f235b27206ef2d0806f233031291037c855308210a8cb00ad5005cb1f13cb3fcb0fcb0fcec91034413010246d50436d03c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb00103555121c0096c87f01ca0055505056cb1f13cec8226eb38e1b7f01ca0002206ef2d0806f2310345023810101cf00810101cf00ce95327058ca00e212cc02c8810101cf0013810101cf00cdcdc9ed54db3103de30f8416f2430325067db3c278200a3c502bef2f4f8276f1027a18209312d0066b608a18209312d00a022a017a11057104610354430db3cf842f8105270c855208210a3877d655004cb1f12ce810101cf00810101cf00c9c88258c000000000000000000000000101cb67ccc970fb001e2334000e820a625a0022a003de30f8416f2430325067db3c278200a3c502bef2f4f8276f1027a18209312d0066b608a18209312d00a021a017a11057104610354430db3cf842f8105270c855208210a3877d655004cb1f12ce810101cf00810101cf00c9c88258c000000000000000000000000101cb67ccc970fb00202334000e820a625a0021a0029e82f0a375025b4d4db1f2491579c1aca35deaef065cc50955f8364526144adc6537dbbae30282f0677e8cc293f605b4e5b43b49d699b421f79482f729bfebab40fe728d7a2d3d91bae3025f06f2c082223302f630f8416f243032f8276f1022a18209312d0066b608a1208209312d00a0a70523813e5602bef2f48209312d00a012a175a904758e8854167628db3c5067e45bf84224a5f810c855208210a3877d655004cb1f12ce810101cf00810101cf00c9c88258c000000000000000000000000101cb67ccc970fb0010355512233402f48200f51628c2fff2f4270610570410374078db3c5c705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d0707270208b081023102f2c544b30c8555082105fcc3d145007cb1f15cb3f13ce01206e9430cf84809201cee2f40001fa02cec91026105b142432010af82801db3c25011e88c87001ca005a02ce810101cf00c9260228ff008e88f4a413f4bcf2c80bed5320e303ed43d9272a018da663f3fb51343480006386be9020404075c0348035cb00645b64fe900078807d0115501b056386be9020404075c01640b4405b5b6080304f7e108971c17cbd1c1678b6cf1b15602803c8c86f00016f8c6d6f8c21206ef2d080d0db3c248e22c821c10098802d01cb0701a301de019a7aa90ca630541220c000e63068a592cb07e4da11c9d0db3c8b52e6a736f6e8db3c22206ef2d080016f2201c993216eb396016f2259ccc9e83124544630285929292900b620d74a21d7499720c20022c200b18e48036f22807f22cf31ab02a105ab025155b60820c2009a20aa0215d71803ce4014de596f025341a1c20099c8016f025044a1aa028e123133c20099d430d020d74a21d749927020e2e2e85f0302f83001d072d721d200d200fa4021103450666f04f86102f862ed44d0d200018e1afa40810101d700d200d72c01916d93fa4001e201f40455406c158e1afa40810101d7005902d1016d6d8200c13df84225c705f2f47059e206925f06e004d70d1ff2e0822182105fcc3d14bae3020182102fcb26a2bae3025f06f2c0822b30039631d33ffa40d72c01916d93fa4001e201f404fa00f8416f24104c103b4ade2ddb3c23c000e30f4034c87f01ca0055405045ce12810101cf00ca0001206e9430cf84809201cee2f400c9ed542c2d2e002cf8276f1021a18209312d0066b608a18209312d00a0a100c6365f0338383838816b6b5146c70514f2f47f03206ef2d0807103c8018210d0298fb358cb1f810101cf00c947305a6d6d40037fc8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0001fe378200c08002206ef2d08052b0c70512f2f45374c2008e587153ab7f1110c85520821005138d915004cb1f12cb3fcecec927104b0350ff10246d50436d03c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb00106a92383be2103948bcfa40fa0071d7212f00defa00fa00306c6170f83aa1216eb38e5801206ef2d08005a1717f04c8018210d0298fb358cb1f810101cf00c9104641301610246d50436d03c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb00935b3330e2403401ccd33f30f8416f2410235f037080407f543467c8552082108b7717355004cb1f12cb3f810101cf00cec91034413010246d50436d03c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb004034310046c87f01ca0055405045ce12810101cf00ca0001206e9430cf84809201cee2f400c9ed54007e103c401c1036453304c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0003a44455431301cc8168c9f84224c705f2f4f8276f10f8416f24135f03a18209312d00a181795a21c200f2f4f8427f588042036d6d50436d4133c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0010355512340092c87f01ca0055505056cb1f13cec8226eb38e1b7f01ca0002206ef2d0806f2310345023810101cf00810101cf00ce95327058ca00e212cc02c8810101cf0013810101cf00cdcdc9ed54ada52c23');
    const builder = beginCell();
    builder.storeUint(0, 1);
    initNftCollection_init_args({ $$type: 'NftCollection_init_args', owner_address, collection_content, royalty_params, nft_price, capital_mint_price })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

export const NftCollection_errors = {
    2: { message: "Stack underflow" },
    3: { message: "Stack overflow" },
    4: { message: "Integer overflow" },
    5: { message: "Integer out of expected range" },
    6: { message: "Invalid opcode" },
    7: { message: "Type check error" },
    8: { message: "Cell overflow" },
    9: { message: "Cell underflow" },
    10: { message: "Dictionary error" },
    11: { message: "'Unknown' error" },
    12: { message: "Fatal error" },
    13: { message: "Out of gas error" },
    14: { message: "Virtualization error" },
    32: { message: "Action list is invalid" },
    33: { message: "Action list is too long" },
    34: { message: "Action is invalid or not supported" },
    35: { message: "Invalid source address in outbound message" },
    36: { message: "Invalid destination address in outbound message" },
    37: { message: "Not enough Toncoin" },
    38: { message: "Not enough extra currencies" },
    39: { message: "Outbound message does not fit into a cell after rewriting" },
    40: { message: "Cannot process a message" },
    41: { message: "Library reference is null" },
    42: { message: "Library change action error" },
    43: { message: "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree" },
    50: { message: "Account state size exceeded limits" },
    128: { message: "Null reference exception" },
    129: { message: "Invalid serialization prefix" },
    130: { message: "Invalid incoming message" },
    131: { message: "Constraints error" },
    132: { message: "Access denied" },
    133: { message: "Contract stopped" },
    134: { message: "Invalid argument" },
    135: { message: "Code of a contract was not found" },
    136: { message: "Invalid standard address" },
    138: { message: "Not a basechain address" },
    15958: { message: "Insufficient funds for batch mint" },
    26825: { message: "Only owner can withdraw" },
    27499: { message: "initialized tx need from collection" },
    31066: { message: "No TON to withdraw" },
    41925: { message: "Insufficient funds for minting" },
    49280: { message: "not owner" },
    49469: { message: "not from collection" },
    62742: { message: "non-sequential NFTs" },
} as const

export const NftCollection_errors_backward = {
    "Stack underflow": 2,
    "Stack overflow": 3,
    "Integer overflow": 4,
    "Integer out of expected range": 5,
    "Invalid opcode": 6,
    "Type check error": 7,
    "Cell overflow": 8,
    "Cell underflow": 9,
    "Dictionary error": 10,
    "'Unknown' error": 11,
    "Fatal error": 12,
    "Out of gas error": 13,
    "Virtualization error": 14,
    "Action list is invalid": 32,
    "Action list is too long": 33,
    "Action is invalid or not supported": 34,
    "Invalid source address in outbound message": 35,
    "Invalid destination address in outbound message": 36,
    "Not enough Toncoin": 37,
    "Not enough extra currencies": 38,
    "Outbound message does not fit into a cell after rewriting": 39,
    "Cannot process a message": 40,
    "Library reference is null": 41,
    "Library change action error": 42,
    "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree": 43,
    "Account state size exceeded limits": 50,
    "Null reference exception": 128,
    "Invalid serialization prefix": 129,
    "Invalid incoming message": 130,
    "Constraints error": 131,
    "Access denied": 132,
    "Contract stopped": 133,
    "Invalid argument": 134,
    "Code of a contract was not found": 135,
    "Invalid standard address": 136,
    "Not a basechain address": 138,
    "Insufficient funds for batch mint": 15958,
    "Only owner can withdraw": 26825,
    "initialized tx need from collection": 27499,
    "No TON to withdraw": 31066,
    "Insufficient funds for minting": 41925,
    "not owner": 49280,
    "not from collection": 49469,
    "non-sequential NFTs": 62742,
} as const

const NftCollection_types: ABIType[] = [
    {"name":"DataSize","header":null,"fields":[{"name":"cells","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"bits","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"refs","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SignedBundle","header":null,"fields":[{"name":"signature","type":{"kind":"simple","type":"fixed-bytes","optional":false,"format":64}},{"name":"signedData","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounceable","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"MessageParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"DeployParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"init","type":{"kind":"simple","type":"StateInit","optional":false}}]},
    {"name":"StdAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":8}},{"name":"address","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"VarAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"address","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"BasechainAddress","header":null,"fields":[{"name":"hash","type":{"kind":"simple","type":"int","optional":true,"format":257}}]},
    {"name":"UpdateJettonWallet","header":2742123182,"fields":[{"name":"jettonWallet","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"UpdateZippWallet","header":3842123343,"fields":[{"name":"jettonWallet","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"CreateAggregator","header":3644408704,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeAdmin","header":636739454,"fields":[{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"StartMining","header":256918561,"fields":[{"name":"signature","type":{"kind":"simple","type":"slice","optional":false}},{"name":"strength","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"nonce","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"ClaimMinedTokens","header":4178973992,"fields":[]},
    {"name":"SentMinedTokens","header":1740327225,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"recipient","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SendMinedTokens","header":42025349,"fields":[{"name":"recipient","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"TestSendMinedTokens","header":2667481999,"fields":[{"name":"recipient","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"ResetSession","header":4084086825,"fields":[]},
    {"name":"SessionReset","header":3813174516,"fields":[{"name":"user","type":{"kind":"simple","type":"address","optional":false}},{"name":"message","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"MiningStarted","header":1329353948,"fields":[{"name":"user","type":{"kind":"simple","type":"address","optional":false}},{"name":"startTime","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"TokensClaimed","header":1024912805,"fields":[{"name":"user","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"JettonTransfer","header":260734629,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"responseDestination","type":{"kind":"simple","type":"address","optional":true}},{"name":"customPayload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forwardTonAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"Excesses","header":3576854235,"fields":[]},
    {"name":"TokenNotification","header":1935855772,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"ProvideWalletBalance","header":2059982169,"fields":[{"name":"receiver","type":{"kind":"simple","type":"address","optional":false}},{"name":"includeVerifyInfo","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"TakeWalletBalance","header":3396861378,"fields":[{"name":"balance","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"verifyInfo","type":{"kind":"simple","type":"VerifyInfo","optional":true}}]},
    {"name":"VerifyInfo","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"minter","type":{"kind":"simple","type":"address","optional":false}},{"name":"code","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"ChildAlreadyExists","header":2152919071,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"userContract","type":{"kind":"simple","type":"address","optional":true}}]},
    {"name":"Seller","header":null,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"AddSeller","header":3318254856,"fields":[{"name":"rate","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"seller","type":{"kind":"simple","type":"Seller","optional":false}}]},
    {"name":"BuyCompleted","header":2442858138,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"rate","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"txId","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SellerAddedToPool","header":4045869237,"fields":[{"name":"rate","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"seller","type":{"kind":"simple","type":"Seller","optional":false}},{"name":"txId","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"ListingCancelled","header":1614679801,"fields":[{"name":"seller","type":{"kind":"simple","type":"address","optional":false}},{"name":"rate","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"txId","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"Cancellisting","header":1027964760,"fields":[{"name":"payload","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"ClaimDailyTasks","header":1732588062,"fields":[{"name":"signature","type":{"kind":"simple","type":"slice","optional":false}},{"name":"nonce","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"taskNum","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"ClaimOnboardingRewards","header":4097662005,"fields":[{"name":"signature","type":{"kind":"simple","type":"slice","optional":false}},{"name":"nonce","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SendTaskReward","header":997213079,"fields":[{"name":"recipient","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SentTaskReward","header":2139210137,"fields":[{"name":"recipient","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SendOnboardingReward","header":511387795,"fields":[{"name":"recipient","type":{"kind":"simple","type":"address","optional":false}},{"name":"zipp","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"oreva","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SentOnboardingReward","header":1492481023,"fields":[{"name":"recipient","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TaskRewardClaimed","header":4031683821,"fields":[{"name":"user","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"totalClaimed","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"OnBoardingRewardsClaimed","header":428238222,"fields":[{"name":"recipient","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ResetTask","header":2614433684,"fields":[]},
    {"name":"ElixirPurchased","header":270263841,"fields":[{"name":"user","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"txId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SellersBadgePurchased","header":2075559686,"fields":[{"name":"user","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"txId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"WithdrawZipp","header":2962522601,"fields":[{"name":"recipient","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"WithdrawHubbTon","header":2460169974,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"LogEventMintRecord","header":2743565669,"fields":[{"name":"minter","type":{"kind":"simple","type":"address","optional":false}},{"name":"item_id","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"generate_number","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"GetRoyaltyParams","header":1765620048,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"ReportRoyaltyParams","header":2831876269,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"numerator","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"denominator","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"CollectionData","header":null,"fields":[{"name":"next_item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection_content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"owner_address","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"RoyaltyParams","header":null,"fields":[{"name":"numerator","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"denominator","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Transfer","header":1607220500,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"new_owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":true}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"OwnershipAssigned","header":85167505,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"prev_owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"GetStaticData","header":801842850,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"ReportStaticData","header":2339837749,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"index_id","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"GetNftData","header":null,"fields":[{"name":"is_initialized","type":{"kind":"simple","type":"bool","optional":false}},{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"owner_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"individual_content","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"NftExcesses","header":3492384691,"fields":[{"name":"query_id","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"NftCollection$Data","header":null,"fields":[{"name":"next_item_index","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"owner_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"royalty_params","type":{"kind":"simple","type":"RoyaltyParams","optional":true}},{"name":"collection_content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"nft_price","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"capital_mint_price","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"NftItem$Data","header":null,"fields":[{"name":"collection_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"is_initialized","type":{"kind":"simple","type":"bool","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":true}},{"name":"individual_content","type":{"kind":"simple","type":"cell","optional":true}}]},
]

const NftCollection_opcodes = {
    "UpdateJettonWallet": 2742123182,
    "UpdateZippWallet": 3842123343,
    "CreateAggregator": 3644408704,
    "ChangeAdmin": 636739454,
    "StartMining": 256918561,
    "ClaimMinedTokens": 4178973992,
    "SentMinedTokens": 1740327225,
    "SendMinedTokens": 42025349,
    "TestSendMinedTokens": 2667481999,
    "ResetSession": 4084086825,
    "SessionReset": 3813174516,
    "MiningStarted": 1329353948,
    "TokensClaimed": 1024912805,
    "JettonTransfer": 260734629,
    "Excesses": 3576854235,
    "TokenNotification": 1935855772,
    "ProvideWalletBalance": 2059982169,
    "TakeWalletBalance": 3396861378,
    "ChildAlreadyExists": 2152919071,
    "AddSeller": 3318254856,
    "BuyCompleted": 2442858138,
    "SellerAddedToPool": 4045869237,
    "ListingCancelled": 1614679801,
    "Cancellisting": 1027964760,
    "ClaimDailyTasks": 1732588062,
    "ClaimOnboardingRewards": 4097662005,
    "SendTaskReward": 997213079,
    "SentTaskReward": 2139210137,
    "SendOnboardingReward": 511387795,
    "SentOnboardingReward": 1492481023,
    "TaskRewardClaimed": 4031683821,
    "OnBoardingRewardsClaimed": 428238222,
    "ResetTask": 2614433684,
    "ElixirPurchased": 270263841,
    "SellersBadgePurchased": 2075559686,
    "WithdrawZipp": 2962522601,
    "WithdrawHubbTon": 2460169974,
    "LogEventMintRecord": 2743565669,
    "GetRoyaltyParams": 1765620048,
    "ReportRoyaltyParams": 2831876269,
    "Transfer": 1607220500,
    "OwnershipAssigned": 85167505,
    "GetStaticData": 801842850,
    "ReportStaticData": 2339837749,
    "NftExcesses": 3492384691,
}

const NftCollection_getters: ABIGetter[] = [
    {"name":"get_collection_data","methodId":102491,"arguments":[],"returnType":{"kind":"simple","type":"CollectionData","optional":false}},
    {"name":"get_nft_mint_total_cost","methodId":65652,"arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"get_capital_mint_total_cost","methodId":100616,"arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"get_nft_address_by_index","methodId":92067,"arguments":[{"name":"item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":true}},
    {"name":"getNftItemInit","methodId":81078,"arguments":[{"name":"item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"StateInit","optional":false}},
    {"name":"get_nft_content","methodId":68445,"arguments":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"individual_content","type":{"kind":"simple","type":"cell","optional":false}}],"returnType":{"kind":"simple","type":"cell","optional":false}},
    {"name":"royalty_params","methodId":85719,"arguments":[],"returnType":{"kind":"simple","type":"RoyaltyParams","optional":false}},
]

export const NftCollection_getterMapping: { [key: string]: string } = {
    'get_collection_data': 'getGetCollectionData',
    'get_nft_mint_total_cost': 'getGetNftMintTotalCost',
    'get_capital_mint_total_cost': 'getGetCapitalMintTotalCost',
    'get_nft_address_by_index': 'getGetNftAddressByIndex',
    'getNftItemInit': 'getGetNftItemInit',
    'get_nft_content': 'getGetNftContent',
    'royalty_params': 'getRoyaltyParams',
}

const NftCollection_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"text","text":"Mint"}},
    {"receiver":"internal","message":{"kind":"text","text":"CapitalMint"}},
    {"receiver":"internal","message":{"kind":"text","text":"MintBatch"}},
    {"receiver":"internal","message":{"kind":"typed","type":"GetRoyaltyParams"}},
    {"receiver":"internal","message":{"kind":"text","text":"Withdraw"}},
]

export const minTonsForStorage = 20000000n;
export const gasConsumption = 20000000n;

export class NftCollection implements Contract {
    
    public static readonly storageReserve = 0n;
    public static readonly errors = NftCollection_errors_backward;
    public static readonly opcodes = NftCollection_opcodes;
    
    static async init(owner_address: Address, collection_content: Cell, royalty_params: RoyaltyParams, nft_price: bigint, capital_mint_price: bigint) {
        return await NftCollection_init(owner_address, collection_content, royalty_params, nft_price, capital_mint_price);
    }
    
    static async fromInit(owner_address: Address, collection_content: Cell, royalty_params: RoyaltyParams, nft_price: bigint, capital_mint_price: bigint) {
        const __gen_init = await NftCollection_init(owner_address, collection_content, royalty_params, nft_price, capital_mint_price);
        const address = contractAddress(0, __gen_init);
        return new NftCollection(address, __gen_init);
    }
    
    static fromAddress(address: Address) {
        return new NftCollection(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  NftCollection_types,
        getters: NftCollection_getters,
        receivers: NftCollection_receivers,
        errors: NftCollection_errors,
    };
    
    constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: "Mint" | "CapitalMint" | "MintBatch" | GetRoyaltyParams | "Withdraw") {
        
        let body: Cell | null = null;
        if (message === "Mint") {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === "CapitalMint") {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === "MintBatch") {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'GetRoyaltyParams') {
            body = beginCell().store(storeGetRoyaltyParams(message)).endCell();
        }
        if (message === "Withdraw") {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetCollectionData(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('get_collection_data', builder.build())).stack;
        const result = loadGetterTupleCollectionData(source);
        return result;
    }
    
    async getGetNftMintTotalCost(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('get_nft_mint_total_cost', builder.build())).stack;
        const result = source.readBigNumber();
        return result;
    }
    
    async getGetCapitalMintTotalCost(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('get_capital_mint_total_cost', builder.build())).stack;
        const result = source.readBigNumber();
        return result;
    }
    
    async getGetNftAddressByIndex(provider: ContractProvider, item_index: bigint) {
        const builder = new TupleBuilder();
        builder.writeNumber(item_index);
        const source = (await provider.get('get_nft_address_by_index', builder.build())).stack;
        const result = source.readAddressOpt();
        return result;
    }
    
    async getGetNftItemInit(provider: ContractProvider, item_index: bigint) {
        const builder = new TupleBuilder();
        builder.writeNumber(item_index);
        const source = (await provider.get('getNftItemInit', builder.build())).stack;
        const result = loadGetterTupleStateInit(source);
        return result;
    }
    
    async getGetNftContent(provider: ContractProvider, index: bigint, individual_content: Cell) {
        const builder = new TupleBuilder();
        builder.writeNumber(index);
        builder.writeCell(individual_content);
        const source = (await provider.get('get_nft_content', builder.build())).stack;
        const result = source.readCell();
        return result;
    }
    
    async getRoyaltyParams(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('royalty_params', builder.build())).stack;
        const result = loadGetterTupleRoyaltyParams(source);
        return result;
    }
    
}