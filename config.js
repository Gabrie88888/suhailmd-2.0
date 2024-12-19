const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_31_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgMTcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgODAsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NixcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNLaWtaT2cvTmNGcmhGWStZRldZR2JGb0pmTkNmVFBub2UrU3VjQ2o1UzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNFZDBSVkV6VHhtSXZKZ24xOVJ1RkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmQ4MTNlODctMGUyZi00NWRmLWI1MmEtNDg0ZGI4ZmZiNzkxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDE3NCxcbiAgICAgIDE2NixcbiAgICAgIDI1MixcbiAgICAgIDE3NSxcbiAgICAgIDE3NSxcbiAgICAgIDIyNixcbiAgICAgIDc4LFxuICAgICAgMTk2LFxuICAgICAgMTYxLFxuICAgICAgMTY2LFxuICAgICAgOTAsXG4gICAgICAxOSxcbiAgICAgIDE0NSxcbiAgICAgIDYyLFxuICAgICAgMTU3LFxuICAgICAgMTIwLFxuICAgICAgMjAyLFxuICAgICAgNTcsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAxOTgsXG4gICAgICAyMzUsXG4gICAgICAxOTYsXG4gICAgICAxMzgsXG4gICAgICAwLFxuICAgICAgMjgsXG4gICAgICA1NCxcbiAgICAgIDYyLFxuICAgICAgMTMsXG4gICAgICAyMzYsXG4gICAgICAxMTcsXG4gICAgICA0MCxcbiAgICAgIDE0LFxuICAgICAgMTI0LFxuICAgICAgMjIyLFxuICAgICAgMTM1LFxuICAgICAgMjMyLFxuICAgICAgMTU0LFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhKRFhERkU3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ2NjI5MDIwOjc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzMzMzg1NDA0MDEwODo3OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTFM2cllERU4zUGo3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlA1bGkwcThPK1dxZzJ5L2wwcjk5Wmd0YW44M0pTcGJwTmxkQjFIdmtDVnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicFlzZFZud1JnSEZuQlM0YlF6RkVtaFgvWm8rYmVWeVcvb3NrT016OU56VVZNcVBsdFJkT3BGNVRyS2cxSlozWFpBUGI1VFg1MEc2KzEzanVXU1puaUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQjR3ZGRpQXpTRFEwcWtEbzhWaHBwUHdhcnVMSW5LZDE0OENVWUtLNi9BRzRNeHorZmZJOHJOWU81ck5KOElEbDliVGczbEc5Smd4ODkyZVJ0UHkvRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NjYyOTAyMDo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NjAwNjczXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
