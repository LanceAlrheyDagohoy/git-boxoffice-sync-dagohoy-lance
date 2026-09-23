Git Box Office Sync Workflow

 1. Final `calculateTicketPrice` Function

The final `calculateTicketPrice` function combines the changes made by the contributors during the different tasks.

First, the function calculates the original ticket price by multiplying the quantity by the base price. Clone A added the 10% group discount which is applied when the customer buys 5 or more tickets. Clone C added the 50% VIP surcharge, which is applied when the seating is premium. During Task 6, Clone A added the flat $10 discount which is subtracted from the total. Finally, Clone B changed the original `Math.floor()` to **`Math.round()`, so the final amount is rounded instead of simply removing the decimal part.

The final function therefore represents the combined work of all three contributors. Each change affects the same shared calculation, which is why the changes had to be carefully combined during the merges and rebase.

 2. Task 3 Two-Way Conflict vs. Task 5 Three-Way Conflict

Task 3 involved a two-way conflict between Clone A and Clone B. Clone A added the 10% group discount, while Clone B changed the calculation from `Math.floor()` to `Math.round()`. The main challenge was to keep both changes instead of accidentally choosing only one version.

Task 5 was more difficult because Clone C introduced a third line of work by adding the 50% VIP surcharge. The group discount and rounding changes from the previous work also had to remain. Instead of comparing only two different versions, the changes from three contributors had to be considered together.

The third line of work made the conflict more complicated because there were more changes affecting the same function. It increased the possibility of accidentally overwriting or leaving out another contributor's work. The solution required combining the three changes carefully and checking the tests afterward.

 3. Why the Flat $10 Discount Affected the Other Tests

The flat $10 discount affected the group-discount and VIP tests because all of these features use the same `calculateTicketPrice` function. When the `$10` discount was added to that shared function, it was applied to every calculation that passed through the function, not only to the new flat-discount test.

For example, the group-discount calculation that previously produced `$90` became `$80` after the additional `$10` discount. The VIP calculation was also changed because the `$10` was subtracted from its result as well.

This shows that changes in shared code are not always completely isolated. A change intended for one feature can affect other features that depend on the same function. Because of this, developers need to run existing tests after modifying shared code and consider how a change affects the entire function, not just the new feature.

 4. Process Change That Could Have Prevented the Rejected Pushes

One process change that could have prevented all three rejected pushes would be to require every contributor to **synchronize with the latest remote branch before starting new work and before pushing**.

For example, the team could agree that each contributor must run `git fetch` and check the latest remote branch before making changes. If another contributor had already pushed changes, the contributor could merge or rebase those changes into their local branch before attempting to push.

This process would keep the contributors more synchronized and reduce the chance of pushing an outdated branch. It would also make conflicts easier to handle earlier instead of discovering them only after a push is rejected.

 Screenshot Evidence

 Task 1
[Task 1](screenshots/task1.png)

 Task 2
[Task 2](screenshots/task2.png)

 Task 3
[Task 3](screenshots/task3.png)

 Task 4
[Task 4](screenshots/task4.png)

 Task 5
[Task 5](screenshots/task5.png)

 Task 6
[Task 6](screenshots/task6.png)

 Task 7
[Task 7](screenshots/task7.png)