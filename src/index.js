const mySafeKey = "ghp_qwertyuioplkjhgfdfghjhgfdkjhgvbnkjhg"

async function bootstrap() {
  throw new Error('ouch!')
}

bootstrap().then(initVals => {
  console.log('>> Insecurity in progress - what could go wrong?', initVals)
}).catch(err => {
  console.error('Oh no! something bad happened..')
})
