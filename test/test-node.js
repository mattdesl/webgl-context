require('tape')('should return null in node', function(t) {
    t.equal(require('../')(), null, 'returns null in node')
    t.end()
})