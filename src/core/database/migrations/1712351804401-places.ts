import { MigrationInterface, QueryRunner } from "typeorm";

export class Places1712351804401 implements MigrationInterface {
    name = 'Places1712351804401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "price_list_entry" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "price" integer NOT NULL, "placeId" uuid, CONSTRAINT "PK_52c0499847ca4db09156874dc9a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "mobile_provider" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "icon" character varying NOT NULL, CONSTRAINT "UQ_b150d82c906306df657d118472a" UNIQUE ("name"), CONSTRAINT "PK_fa81386ff8108b2f7d4f0e19135" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "signal_level" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "rating" integer NOT NULL, "placeId" uuid, "providerId" uuid, CONSTRAINT "REL_cb59cc884d04d710f49048d727" UNIQUE ("providerId"), CONSTRAINT "PK_d54fb0cdfca655c91ad7e984992" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "place-photo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "url" character varying NOT NULL, "placeId" uuid, CONSTRAINT "PK_cd1a8aa3a5d6db7fb4f1fff71c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "base_place" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "locationLat" integer NOT NULL, "locationLong" integer NOT NULL, "owner" character varying NOT NULL, "contact" character varying NOT NULL, "openTime" integer, "closeTime" integer, CONSTRAINT "PK_20afe9c1215b43dcbfb2ee155ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."camping_type_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6')`);
        await queryRunner.query(`CREATE TYPE "public"."camping_sanitary_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`CREATE TYPE "public"."camping_food_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`CREATE TYPE "public"."camping_communications_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`CREATE TYPE "public"."camping_otherservices_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6')`);
        await queryRunner.query(`CREATE TABLE "camping" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "locationLat" integer NOT NULL, "locationLong" integer NOT NULL, "owner" character varying NOT NULL, "contact" character varying NOT NULL, "openTime" integer, "closeTime" integer, "noiseLevel" integer NOT NULL, "type" "public"."camping_type_enum" array NOT NULL, "locationType" integer NOT NULL, "season" integer NOT NULL, "sanitary" "public"."camping_sanitary_enum" array NOT NULL, "food" "public"."camping_food_enum" array NOT NULL, "communications" "public"."camping_communications_enum" array NOT NULL, "otherServices" "public"."camping_otherservices_enum" array NOT NULL, CONSTRAINT "PK_6f83c263e368573c880d34f75e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."pitstop_sanitary_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`CREATE TYPE "public"."pitstop_food_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`CREATE TABLE "pitstop" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "locationLat" integer NOT NULL, "locationLong" integer NOT NULL, "owner" character varying NOT NULL, "contact" character varying NOT NULL, "openTime" integer, "closeTime" integer, "sanitary" "public"."pitstop_sanitary_enum" array NOT NULL, "food" "public"."pitstop_food_enum" array NOT NULL, CONSTRAINT "PK_0f64a4e0b37914493b938f48566" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "price_list_entry" ADD CONSTRAINT "FK_5004de1068c5a812bd76e6b9d90" FOREIGN KEY ("placeId") REFERENCES "base_place"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "signal_level" ADD CONSTRAINT "FK_f52670e5378902848ef24da258d" FOREIGN KEY ("placeId") REFERENCES "base_place"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "signal_level" ADD CONSTRAINT "FK_cb59cc884d04d710f49048d727e" FOREIGN KEY ("providerId") REFERENCES "mobile_provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "place-photo" ADD CONSTRAINT "FK_f2041c80896cfcbc56a9546d4ae" FOREIGN KEY ("placeId") REFERENCES "base_place"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "place-photo" DROP CONSTRAINT "FK_f2041c80896cfcbc56a9546d4ae"`);
        await queryRunner.query(`ALTER TABLE "signal_level" DROP CONSTRAINT "FK_cb59cc884d04d710f49048d727e"`);
        await queryRunner.query(`ALTER TABLE "signal_level" DROP CONSTRAINT "FK_f52670e5378902848ef24da258d"`);
        await queryRunner.query(`ALTER TABLE "price_list_entry" DROP CONSTRAINT "FK_5004de1068c5a812bd76e6b9d90"`);
        await queryRunner.query(`DROP TABLE "pitstop"`);
        await queryRunner.query(`DROP TYPE "public"."pitstop_food_enum"`);
        await queryRunner.query(`DROP TYPE "public"."pitstop_sanitary_enum"`);
        await queryRunner.query(`DROP TABLE "camping"`);
        await queryRunner.query(`DROP TYPE "public"."camping_otherservices_enum"`);
        await queryRunner.query(`DROP TYPE "public"."camping_communications_enum"`);
        await queryRunner.query(`DROP TYPE "public"."camping_food_enum"`);
        await queryRunner.query(`DROP TYPE "public"."camping_sanitary_enum"`);
        await queryRunner.query(`DROP TYPE "public"."camping_type_enum"`);
        await queryRunner.query(`DROP TABLE "base_place"`);
        await queryRunner.query(`DROP TABLE "place-photo"`);
        await queryRunner.query(`DROP TABLE "signal_level"`);
        await queryRunner.query(`DROP TABLE "mobile_provider"`);
        await queryRunner.query(`DROP TABLE "price_list_entry"`);
    }

}
