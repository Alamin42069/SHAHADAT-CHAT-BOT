module.exports.config = {
 name: "owner",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Owner information command with styled box",
 commandCategory: "Information",
 usages: "",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
 const ownerInfo = 
`╔═════════════════════╗
║ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 
╠═════════════════════╣
║ 👤 𝗡𝗮𝗺𝗲 : 𝗛𝗿𝗶𝗱𝗼𝘆 𝗛𝗼𝘀𝘀𝗲𝗻
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝗞𝗔𝗞𝗔𝗦𝗛𝗜
║ 🎂 𝗔𝗴𝗲 : 20
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗛𝗦𝗖 (2026)
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝗝𝗮𝘀𝗵𝗼𝗿𝗲
╠═════════════════════╣
║ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦 
╠═════════════════════╣
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 
║ https://fb.com/100048786044500
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 : 
║ m.me/100048786044500
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 : 
║ https://wa.me/01744954836
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 : 
║এডা দিয়ে কি করবি ।
╚═════════════════════╝`;

 return api.sendMessage(ownerInfo, event.threadID, event.messageID);
};
