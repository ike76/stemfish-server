// exports.hello = () => "hello there"
// exports.hi = () => "yeah hows it goin"
// exports.sup = () => "sup"

const helloResolver = {
  hello(parent, args, ctx) {
    return `here are your args: ${args}`
  },
  hi(parent, args, ctx) {
    return `here are your args: ${args}`
  },
  sup(parent, args, ctx) {
    return `here are your args: ${args}`
  }
}

module.exports = { helloResolver }
