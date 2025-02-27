interface Pid2urlOptions {
  host: string;
}

export enum WeiboPicType {
  large = 'large',
  bmiddle = 'bmiddle',
  mw1024 = 'mw1024',
  mw690 = 'mw690',
  small = 'small',
  square = 'square',
  thumb180 = 'thumb180',
  thumbnail = 'thumbnail'
}

// large,bmiddle,mw1024,mw690,small,square,thumb180,thumbnail
// https://tva1.js.work/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg

class WeiboPid2url {
  private options: Pid2urlOptions;

  constructor(inOptions: Pid2urlOptions) {
    this.options = inOptions;
  }

  public get(pid: string) {
    this.validatePid(pid);
    const host = this.options.host;
    const suffix = this.getSuffix(pid);
    const url = `https://${host}/large/${pid}.${suffix}`;
    return url;
  }

  public gets(pid, sizes?: string[]) {
    this.validatePid(pid);
    const host = this.options.host;
    const suffix = this.getSuffix(pid);
    const result = {};
    const _sizes = sizes || this.getAllSizes();
    _sizes.forEach((size) => {
      result[size] = `https://${host}/${size}/${pid}.${suffix}`;
    });
    return result;
  }

  private getSuffix(pid: string) {
    return pid.charAt(21) === 'g' ? 'gif' : 'jpg';
  }

  private getAllSizes() {
    return Object.values(WeiboPicType);
  }

  private validatePid(pid: string) {
    if(!pid || pid.length!== 32) {
      throw new Error('Invalid pid');
    }
  }
}

export default WeiboPid2url;
