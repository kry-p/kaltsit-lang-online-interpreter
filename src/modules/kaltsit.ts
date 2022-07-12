/**
 * Kaltsit-language interpreter
 */
import readFromModule from 'kaltsit-lang-node/bin/readmodule';

const run = (code: string) => {
  const result = readFromModule(code);
  return result;
};

export default run;
