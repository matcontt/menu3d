const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Añadimos las extensiones 3D para que Metro las reconozca
config.resolver.assetExts.push('glb', 'gltf', 'bin');

module.exports = config;