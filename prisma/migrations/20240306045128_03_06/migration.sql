/*
  Warnings:

  - You are about to drop the `NoticeAttachment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `NoticeAttachment` DROP FOREIGN KEY `NoticeAttachment_noticeId_fkey`;

-- AlterTable
ALTER TABLE `Notice` ADD COLUMN `attachments` JSON NULL;

-- DropTable
DROP TABLE `NoticeAttachment`;
