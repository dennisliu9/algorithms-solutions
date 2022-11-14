/* Write your T-SQL query statement below */

;WITH cte AS (
    SELECT      salary,
                rn = DENSE_RANK() OVER (ORDER BY salary DESC)
    FROM        Employee
)
SELECT      SecondHighestSalary = ISNULL(
    (
        SELECT      TOP 1 salary
        FROM        cte
        WHERE       rn = 2
    )
    , NULL
)
