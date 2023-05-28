# Deadlock
---
Deadlock is a situation in a concurrent system where two or more processes are unable to proceed because each is waiting for a resource that is held by another process within the same set. In other words, deadlock occurs when processes are stuck in a circular wait, where each process is waiting for a resource that can only be released by another waiting process.
To avoid and detect deadlock, various strategies can be employed:
-> Deadlock Avoidance:
1. Resource Allocation Strategies: Employ algorithms like Banker's algorithm to dynamically allocate resources to processes based on safe states.
2. Resource Scheduling: Use techniques such as priority-based scheduling to prevent situations that may lead to deadlock.
-> Deadlock Detection:
1. Resource Allocation Graph (RAG): Construct a directed graph representing the allocation and request relationships between processes and resources. Detect cycles in the graph to identify potential deadlocks.
2. Wait-for Graph (WFG): Analyze the dependencies between processes in terms of waiting for resources. Detect cycles in the graph to identify potential deadlocks.
3. Resource Manager: Utilize a centralized resource manager that keeps track of resource allocation and monitors for potential deadlock conditions.