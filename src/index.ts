import { join } from 'path';
import { promisify } from 'util';
import { execFile as _execFile } from 'child_process';
import { Binary } from '@binary/type';

const execFile = promisify(_execFile);

export const HOME = join(__dirname, '..', 'binary');

export default <Binary>{
  homeDir: HOME,

  binaryDir: join(HOME, 'arm-zephyr-eabi', 'bin'),

  async version() {
    //const { stdout } = await execFile(join(this.binaryDir, 'arm-zephyr-eabi-gcc'), ['--version']);
    //return stdout.split('\n')[0].trim();
    return "0.14.1/0.16.2-2023.8.2";
  }
};
