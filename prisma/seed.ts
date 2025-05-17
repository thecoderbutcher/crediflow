import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: 'Admin',
            email: 'Hl0V4@example.com',
            password: '123456',
        }
    })
}

main()
.then(async () => {  await prisma.$disconnect() })
.catch(async (e) => {  
    console.error(e) 
    await prisma.$disconnect()
    process.exit(1)
})