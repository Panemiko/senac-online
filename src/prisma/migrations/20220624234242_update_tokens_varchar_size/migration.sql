/*
  Warnings:

  - You are about to alter the column `token` on the `refreshtoken` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.

*/
-- AlterTable
ALTER TABLE `refreshtoken` MODIFY `token` VARCHAR(128) NOT NULL;

-- AlterTable
ALTER TABLE `settings` MODIFY `refreshSecret` VARCHAR(255) NOT NULL,
    MODIFY `accessSecret` VARCHAR(255) NOT NULL;
