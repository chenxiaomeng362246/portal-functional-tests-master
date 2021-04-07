class Commonmethods{

    randomString(){
        const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = 2; i > 0; --i) 
          result += str[Math.floor(Math.random() * str.length)];
        return result
    }
}

export default new Commonmethods()