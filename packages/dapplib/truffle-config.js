require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remain social install drop supply tennis'; 
let testAccounts = [
"0x7147d808512d5de34d90c57eb925ca295d2360eaa5888b25e4a795deaab98891",
"0xa6577f3385f210dbd60d6b40d41d73ee573e863ce3a3085d9916fabbce8e65e3",
"0x961200226d555cf79c5a127de6191e1a76eda57fa4befbd577cad03b0ba74243",
"0x4ec63580c12c6db60c3c48e31a810dc7e22b86f1dbe6b78f4d6d86f53b693fd9",
"0xd601fe09c4a5343e7c23ae32432ff5371a52d29df6227972c20b2d4ff4955350",
"0x3acff08ee691c483f954c15feff4fdff9e4acd0a0b5394d8aa5099c0703cb5ec",
"0x751b4106129dc75531ffb7c731f17b1828e37ddc34c822512b6e44be8c4ff5c6",
"0x02582765b4e0acd9fe83ff882cc8594ac8a4494452f62f120b9a4e0df14b0691",
"0xa9357a6a7e5860984ce729aa2bdb41419e6d759f7c99909d74adaa6254d2f205",
"0xb8fde903b5ecb0ba9d04cc201b615218050b9bbf73e50d24c9ecb9794db7b832"
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

