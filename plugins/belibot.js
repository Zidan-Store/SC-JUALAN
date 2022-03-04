let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Bulan* :      *Rp 20000*
╠➥ *Permanen* : *Rp 30000*
╠➥ *Premium* :   *Rp 15000*
╠➥ *Sc Bot* :        *Rp 40000*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Dana, Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 
╠═ Scrip original by I`M 𝚉𝚒𝚍𝚊𝚗
╠═〘 ${KiritoBot} 〙 ═`.trim(), footer, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
