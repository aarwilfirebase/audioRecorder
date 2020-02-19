var express = require('express');
var router = express.Router();
const path = require('path');
const unixTime = require('unix-time');
/* GET home page. */
router.post('/', function (req, res, next) {
    const filePath = path.resolve(__dirname + "/../public/assets/downloads/");
    // const mediaLocation = req.file.file;
    const fileExtension = req.body.audioType;
    // console.log(mediaLocation)
    console.log(fileExtension)
    let datetime = new Date();
    const fileName = unixTime(datetime);
    let options = {
        directory: filePath,
        filename: fileName + '.' + fileExtension,
        timeout: 100000
    }

    download(mediaLocation, options, async function (err) {
        if (err) {
            console.log('We got a Error: ', err);
        }
        let convertCommand = `ffmpeg -i ${filePath}/${fileName}.${fileExtension} - acodec ${filePath}/${fileName_}.mp3`;
        await runCommand(convertCommand);
        // fs.unlinkSync(`${filePath}/${fileName}.${fileExtension}`);

    });
    res.send('done');
});

module.exports = router;