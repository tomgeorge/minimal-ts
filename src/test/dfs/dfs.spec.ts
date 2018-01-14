import { DFS } from '../../main/dfs/dfs';

describe('dfs', function() {
    describe('exist', function() {
      it('should exist', function() {
        expect(new DFS()).toBeDefined();
      });
    });
  });
