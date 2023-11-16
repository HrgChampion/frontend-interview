// HLD Basics and consistent hashing
// Replication : Copying data
// Sharding    : distributing responsibilities
// Caching     : maintaining a fast accessible copy of small frequently used data
// Downside of Vertical Scaling
// Cost ,Pre planning/ Estimation,Single point of failure
// Horizontal scaling
// Cheaper,No pre planning,Elasticity,No spof for compute machines but spof for gateway,Complex architechture- because you have to distribute compute storage
// on multiple machines and those machines now will have to talk to each other because communication happens over network and network in unreliable
// stateful vs stateless(all machines are well equipped to take any request)
// stateless load balancing algorithms
// Round Robin, Random,Weighted Round Robin,Least response time first(load balancer store avg res time of machines)
// stateful load balancing algorithm
// LB can maintain a hash map on id basis, normal hash based algo(user_id % no. of machines) but based on load requirements machines will keep added/removed from the cluster and machines are also unreliable
// Consistent Hashing - Logical circles(marking - 0-10^19) having machines and hash function for machines,hash function for user
// Rather than one marking per machine, have multiple markings of a machine
// Consistent Hashing ensures that 
// 1. Bomb radius / userIds which got affected are less
// 2. It is fair in load distribution
// Storage Compute Decoupling

// Caching - store copy of data at a place so that latency of the user decreases
// Client side caching - In browser caching(Cache static resources - DNS Mappings,js files,Images,videos,static files)
// DNS Caching
// CDN Caching - pull and push mechanism
// App Server Caching /Local Caching  ---|_ Redis
// Global Caching                     ---| (cluster of machines storing data in main memory or ssd  so that latency can be reduced)
// DB Caching
