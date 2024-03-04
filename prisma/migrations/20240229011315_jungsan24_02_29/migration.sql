-- CreateTable
CREATE TABLE `Notice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `postedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NoticeAttachment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `noticeId` INTEGER NOT NULL,
    `filePath` VARCHAR(191) NOT NULL,
    `fileName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `NoticeAttachment` ADD CONSTRAINT `NoticeAttachment_noticeId_fkey` FOREIGN KEY (`noticeId`) REFERENCES `Notice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
