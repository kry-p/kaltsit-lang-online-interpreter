/**
 * Kaltsit-language interpreter
 */
import readFromModule from 'kaltsit-lang-node/dist/readmodule';

const run = (code) => {
  const result = readFromModule(code);
  return result;
};

export default run;
