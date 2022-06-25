-- AlterTable
ALTER TABLE `refreshtoken` MODIFY `token` VARCHAR(512) NOT NULL;

-- AlterTable
ALTER TABLE `settings` MODIFY `refreshSecret` VARCHAR(256) NOT NULL,
    MODIFY `accessSecret` VARCHAR(256) NOT NULL;
