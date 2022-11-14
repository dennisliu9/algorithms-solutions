CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
    RETURN (
        /* Write your T-SQL query statement below. */
        SELECT      getNthHighestSalary = ISNULL(
            (
            SELECT      TOP 1
                        salary
            FROM        (
                SELECT      salary,
                            rn = DENSE_RANK() OVER (ORDER BY salary DESC)
                FROM        Employee
                ) sq
            WHERE       rn = @n
            ), NULL)
    );
END
