const path = require('path');

module.exports = {
    entry: './src/index', // Projenizin giriş dosyası,
    mode: 'production', // Geliştirme modunda çalıştır
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js ve .jsx dosyalarını eşleştirir
                exclude: /node_modules/, // node_modules dizinini dışlar
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Bu uzantılara sahip dosyaları çöz
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom', // React ve React-DOM'u bağımlılık olarak dışlar
      },
      
};
