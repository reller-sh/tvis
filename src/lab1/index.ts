import fp from 'lodash/fp'


const argv = fp.toString(fp.find(fp.startsWith('--ary='), process.argv))
const aVal = JSON.parse(fp.replace('--ary=', '', argv))


console.log(fp.orderBy(fp.toNumber, ['asc'], aVal))

