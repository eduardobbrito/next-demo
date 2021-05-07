const timeStamp = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long', timeZone: 'America/Araguaina' }).format(new Date())

export default timeStamp