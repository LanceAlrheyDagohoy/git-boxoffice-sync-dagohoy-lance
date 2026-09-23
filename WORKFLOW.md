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
[Clone A added a 10% discount for customers who buy 5 or more tickets. The change was committed and pushed to the remote repository.
](screenshots/task1.png)

 Task 2
[Clone B changed the ticket price calculation from `Math.floor()` to `Math.round()`. The push was rejected because Clone B was behind the remote branch, demonstrating the need to synchronize before pushing.
](screenshots/task2.png)

 Task 3
[Clone B fetched the latest changes and merged them with its own work. The conflict was resolved by keeping both the 10% group discount and the new rounding behavior.](screenshots/task3.png)

 Task 4
[Clone C added a 50% surcharge for premium or VIP seating. Its push was rejected because the remote branch had newer changes from the other clone.
](screenshots/task4.png)

 Task 5
[Clone C fetched the latest changes and resolved the conflict by combining the group discount, rounding, and VIP surcharge. The resulting code was tested to make sure all features worked together.](screenshots/task5.png)

 Task 6
[Clone A added a flat $10 discount without first synchronizing with the remote branch, causing another rejected push. The branch was then rebased, and conflicts in multiple files were resolved while keeping the group discount, rounding, VIP surcharge, and flat discount.](screenshots/task6.png)

 Task 7
[The completed `feature/group-pricing` branch was merged into `main`. The final changes were pushed to GitHub, and the completed version was tagged as `v1.0-synced`.](screenshots/task7.png)
