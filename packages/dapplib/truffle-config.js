require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remember protect gloom narrow fold senior'; 
let testAccounts = [
"0x98155080180ba4418b8040abc2bfd9baf073e11e3b1eaa4bb99129eea3074a4c",
"0x283a5d4599728528453915e16d27b3eb8c593fe873a38725188162128805f3e7",
"0x5b0facce3122cdc3bc03d2ad6821e17fed0c5119c6f8fb33345b0d4c2131deaf",
"0xd0a317a4fee9fea443326638b596d26e36818a292c1d1db596c2b7c916b86c95",
"0x9eccb9e49013bf9ecc857618ddc3590a8684b7ea15766480b55a90334128c8b5",
"0x8009a6c25843c15b57c33da2548c572fa7dcd29da4747149e4d3c01d4590c466",
"0x2a3ed5a0a4084471a0b16ef87d1e3f7fb8b8faa9890f427c56c5ccfffd2b6f87",
"0x6d305e0d9e6ea5613cd8d5581fc7b1b61647da575bffc606198a0e5bd7a9b441",
"0x8c1c03cc9f9e11d5d12a5f298b0d78d993b6e0d48f91b1036ff0be5bb7fa6cd5",
"0x2ac99a814402806d5b62fbac61e5aa7426e3b3e7f828d8f8699615067dc489c4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

