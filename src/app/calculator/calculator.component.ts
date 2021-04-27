import { Component } from '@angular/core';
import { SoundPlayerService } from '../Services/sound-player.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  monitor: string = '';
  monitorTextColor: string = 'white';

  constructor(private soundPlayer: SoundPlayerService) {
  }

  addDigit = (digit: any) => {
    this.soundPlayer.playSound('');
    this.monitorTextColor = 'white';
    this.monitor.includes('error') ?
      this.monitor = digit.toString() :
      this.monitor += digit
  };
  removeAllDigits = () => {
    this.soundPlayer.playSound('clear');
    this.monitor = '';
  };
  removeADigit = () => {
    this.soundPlayer.playSound('discard');
    this.monitorTextColor = 'white';
    this.monitor.includes('error') ?
      this.monitor = '' :
      this.monitor = this.monitor.substring(0, this.monitor.length - 1)
  };
  evaluateExp = () => {
    try {
      this.monitorTextColor = 'greenyellow';
      this.monitor = eval(this.monitor).toString();
      this.soundPlayer.playSound('correct');
    }
    catch (error) {
      this.soundPlayer.playSound('error');
      this.monitorTextColor = 'red';
      this.monitor = 'Syntax error';
    }
  }
}
