import { DFS } from '../../main/dfs/dfs';
import { Graph } from 'graph-data-structure';

describe('dfs', function() {
    describe('exist', function() {
      it('should exist', function() {
/*         let g = new Graph();
        g.addNode("a"); */
        expect(new DFS()).toBeDefined();
      });
    });
  });
