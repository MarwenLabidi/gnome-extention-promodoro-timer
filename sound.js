'use strict'

const Gio = imports.gi.Gio
const Me = imports.misc.extensionUtils.getCurrentExtension()

class Sound {
    constructor() {
        this.soundFile = Gio.File.new_for_path(`${Me.path}/ding.ogg`)
        this.soundFile2 = Gio.File.new_for_path(`${Me.path}/getUP.ogg`)
    }

    play() {
        let soundPlayer = global.display.get_sound_player()
        soundPlayer.play_from_file(this.soundFile, 'arbitrary description', null)
    }
    play2() {
        let soundPlayer = global.display.get_sound_player()
        soundPlayer.play_from_file(this.soundFile2, 'arbitrary description', null)
    }
}
