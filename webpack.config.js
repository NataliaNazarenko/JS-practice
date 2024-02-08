const path = require('path');

module.exports = {
    entry: './index.js', // вказуємо шлях до вихідного файлу (індексного файлу)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
};