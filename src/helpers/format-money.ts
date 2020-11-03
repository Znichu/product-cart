const options = { style: 'currency', currency: 'RUB' };

export const convertMoney = (money: number) => {
    const formatter = new Intl.NumberFormat('ru-RU', options);
    return formatter.format(money);
};