export const config = {
    host : 'ep-odd-haze-adbv5w5c-pooler.c-2.us-east-1.aws.neon.tech',
    database:process.env.PGDATABASE,
    user:process.env.PGUSER,
    password:process.env.PGPASSWORD,
    port:5432,
    ssl: true
}
