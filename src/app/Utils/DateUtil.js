class DateUtil {
    addHours(date, hours) {
        return new Date().setHours(date.getHours() + hours);
    }

    async addMinutes(date, minutes) {
        return new Date().setMinutes(date.getMinutes() + minutes);
    }
}

export default new DateUtil();