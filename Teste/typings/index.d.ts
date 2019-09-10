declare var VMasker : VMaskerStatic;

interface VanillaMasker {
    maskMoney(options?:any):void;
    maskNumber():void;
    maskAlphaNum():void;
    maskPattern(pattern:any):void;
    unMask():void;
    unbindElementToMask():void;
    bindElementToMask(maskFunction:string):void;
}

interface VMaskerStatic {
    new (el?:any):VanillaMasker;
    toMoney(value:number, opts?:any):string;
    toNumber(value:any):number;
    toAlphaNumeric(value:any):string;
    toPattern(value:any, opts?:any):string;
}

