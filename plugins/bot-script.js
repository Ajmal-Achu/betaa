import fetch from 'node-fetch'
import moment from 'moment-timezone'

var handler = async (m, { conn, usedPrefix }) => {

let res = await fetch('https://api.github.com/repos/Ajmal-Achu/Wizard-MD')
let json = await res.json()
 
let git = `*乂  S O U R C E - C O D E*\n\n◦ *Nombre* : ${json.name}\n◦ *Visitors* : ${json.watchers_count}\n◦ *Size* : ${(json.size / 1024).toFixed(2)} MB\n◦ *Actualizado* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n◦ *Url* : ${json.html_url}\n\n	   ${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues\n\n${azami}`
await conn.sendUrl(m.chat, git, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen2, thumbnailUrl: imagen1, title: '\t\t\t\t\t\t᭡͡ᩬ🍧✩̣̣̣̣̣ͯ𝐍𝐞𝐱𝐮𝐬𝑩𝒐𝒕᭡͡ᩬ🍧✩̣̣̣̣̣ͯ', }})
 
}
handler.tags =['bot'] 
handler.help = ['script'] 
handler.command = ['sc', 'script', 'codigo', 'git', 'github']

handler.register = true

export default handler
