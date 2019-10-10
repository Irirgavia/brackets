module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) return false;

    let openedBracket = [];
    for (let currentBracket of str) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (currentBracket == bracketsConfig[i][0] && currentBracket == bracketsConfig[i][1]) {
                if (openedBracket.indexOf(currentBracket) == -1) {
                    openedBracket.push(currentBracket);
                }
                else {
                    if (currentBracket != openedBracket.pop()) {
                        return false;
                    }
                }
                break;
            }

            if (currentBracket == bracketsConfig[i][0]) {
                openedBracket.push(currentBracket);
                break;
            }

            if (currentBracket == bracketsConfig[i][1]) {
                if (openedBracket != []) {
                    if (bracketsConfig[i][0] != openedBracket.pop()) {
                        return false;
                    }
                }
                else return false;
            }
        }
    }
    return true;
}
