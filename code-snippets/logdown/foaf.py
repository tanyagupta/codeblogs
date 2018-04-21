
import numpy

class Graph:
    """ Reprsents a graph as an adjacency set and some of its basic functions """

    def __init__ (self, data_source):
        g = {}
        #TODO: we may to make it generic for any data source for now just tex file
        f=open(data_source, "r")
        lines =f.readlines()
        for line in lines:
            # every  vertices read in
            v0, v1 = line.split() # unpack them
            if v0 in g:
                if not (v1 in g [v0]):
                    g[v0].add (v1)
            else:
                g[v0] = {v1}

            if v1 in g:
                if not (v0 in g [v1]):
                    g[v1].add (v0)
            else:
                g[v1] = {v0}

        self.graph = g

    def get_adjacency_matrix (self):
        adjlist = self.graph
        i =0
        index_map = {}
        for v in adjlist:
            index_map [v]=i
            i=i+1

        size = len(adjlist)
        mat = numpy.zeros ([size, size])

        for v0 in adjlist:
            for v1 in adjlist[v0]:
                #print (v0, v1)
                #print (index_map[v0], index_map[v1])
                mat [index_map[v0], index_map [v1]] =1
        return (mat,index_map)

    def show (self):
        return  self.graph

    def foaf_BFS(self, s, t):
        # Mark all the vertices as not visited
        visited = {}
        for v in self.graph:
            visited[v] = False
        # Create a queue for BFS
        queue = []
        # Mark the source node as visited and enqueue it
        queue.append(s)
        visited[s] = True

        while queue:
            # Dequeue a vertex from queue and print it
            s = queue.pop(0)
            if s == t:
                return True
            # Get all adjacent vertices of the dequeued
            # vertex s. If a adjacent has not been visited,
            # then mark it visited and enqueue it
            for i in self.graph[s]:
                if visited[i] == False:
                    queue.append(i)
                    visited[i] = True
        return False





def main ():
    g =  Graph ("friends.txt")
    #print (g.get_adjacency_matrix())
    #print (g.show())
    print (g.foaf_BFS ("Abir", "Dennis"))







if __name__ == '__main__':
    main()
