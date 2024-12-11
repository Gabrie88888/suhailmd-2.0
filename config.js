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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_26_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTQzLFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY2LFxuICAgICAgICA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc4LFxuICAgICAgICA2MixcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICA0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjExLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICA0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDg3LFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwV1lVdSttTVh2T3ZTRmRFbHNheWxIeTR2VkJ4Z3NCdXc0ZXFzZGpoNFh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFT2JKbTRwNlJXYW9WUUFpeEFZdmV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE4MzBkYTExLWNjY2UtNGU4MS1iY2FmLTVlN2EyZDg1NGY2MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDU4LFxuICAgICAgMixcbiAgICAgIDE3MCxcbiAgICAgIDQwLFxuICAgICAgMTYyLFxuICAgICAgMTYsXG4gICAgICA0NCxcbiAgICAgIDIyNyxcbiAgICAgIDIxLFxuICAgICAgMTQ1LFxuICAgICAgMTU3LFxuICAgICAgOCxcbiAgICAgIDUzLFxuICAgICAgMTg0LFxuICAgICAgNzAsXG4gICAgICA5OCxcbiAgICAgIDI5LFxuICAgICAgMjI5LFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDIxNixcbiAgICAgIDQzLFxuICAgICAgODcsXG4gICAgICA2OCxcbiAgICAgIDEzOCxcbiAgICAgIDMxLFxuICAgICAgOTAsXG4gICAgICAyNTIsXG4gICAgICAxOTksXG4gICAgICAxOSxcbiAgICAgIDgsXG4gICAgICAxNzQsXG4gICAgICA1NSxcbiAgICAgIDg0LFxuICAgICAgMTg5LFxuICAgICAgNDgsXG4gICAgICAxODIsXG4gICAgICA4MyxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyVFhMUkpQS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NjYyOTAyMDo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKAjuKAjsODw4fwnZG7w4/wnZG9w4t+8J2RrfCdkpkge+KAouKAmT4+4oCiXFxcXFwiLFxuICAgIFwibGlkXCI6IFwiNTczMzM4NTQwNDAxMDg6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT09Td3FZRUVQamc1TG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5bHI3SlVNRG9mWnNjTW5WSXBlZzBuVDBpdUtxTGpMcHVrV3lydGVobTBjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjYwMHFVU2QvSUVYQ2dCUVpOd2MwVjZ1YnN5c2pXVlZLeXpBMFp6L3FETWdsd2ZsaWVvZTh3V2dmeUY1Qkg2ZjMwQjM1QmFnOStQYjZZYlZjTldBUWhnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVraDRTWVZOOUNqMjFRWG53OE1rcXVDUGxjZXdzSHJ0VWxWWmQydWxVVTFSSUxmS3hpQnBKNElDOHFkVEp6cFpDS0tSQUJBSGk2eWtva3ltWEF4NERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDY2MjkwMjA6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzg5ODM2NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
