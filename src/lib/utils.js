module.exports = {
    age(timestamp){
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDay() - birthDate.getDay() ){
            age = age - 1
        }
        return age
    },

    date(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`
        const day = `0${date.getUTCDate()}`

            return{
                day,
                month,
                year,
                birthday: `${day.slice(-2)}/${month.slice(-2)}`,
                iso: `${year}-${month.slice(-2)}-${day.slice(-2)}`,
                format: `${day.slice(-2)}/${month.slice(-2)}/${year}`
        }
    }
}