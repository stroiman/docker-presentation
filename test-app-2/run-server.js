const args = [ 'run', 'start:watch'];
const opts = { stdio: 'inherit', cwd: 'server', shell: true };
require('child_process').spawn('npm', args, opts);
