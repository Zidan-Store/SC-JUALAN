let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ PULSA : 085810172953
├ DANA : 085810172953 
├ OVO : TIDAK TERSEDIA∅
├ Shoppe : TIDAK TERSEDIA∅
├ GOPAY : TIDAK TERSEDIA∅
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
