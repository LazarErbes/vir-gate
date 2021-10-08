abstract class BaseModel {
    constructor() {
        console.log(this);
    }
    clone(): this {
        return new (this.constructor as any)(JSON.parse(JSON.stringify(this)));
    }
}

export default BaseModel;
