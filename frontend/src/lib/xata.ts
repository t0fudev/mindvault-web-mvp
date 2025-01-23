// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Areas",
    checkConstraints: {
      Areas_xata_id_length_xata_id: {
        name: "Areas_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      test_link: {
        name: "test_link",
        columns: ["test"],
        referencedTable: "Tests",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      Areas__pgroll_new_area_id_key: {
        name: "Areas__pgroll_new_area_id_key",
        columns: ["area_id"],
      },
      _pgroll_new_Areas_xata_id_key: {
        name: "_pgroll_new_Areas_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "area_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "area_name",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "test",
        type: "link",
        link: { table: "Tests" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Tests"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Categories",
    checkConstraints: {
      Categories_xata_id_length_xata_id: {
        name: "Categories_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      test_link: {
        name: "test_link",
        columns: ["test"],
        referencedTable: "Tests",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      Categories__pgroll_new_category_id_key: {
        name: "Categories__pgroll_new_category_id_key",
        columns: ["category_id"],
      },
      Categories__pgroll_new_category_name_key: {
        name: "Categories__pgroll_new_category_name_key",
        columns: ["category_name"],
      },
      _pgroll_new_Categories_xata_id_key: {
        name: "_pgroll_new_Categories_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "category_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "category_name",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "test",
        type: "link",
        link: { table: "Tests" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Tests"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Countries",
    checkConstraints: {
      Countries_xata_id_length_xata_id: {
        name: "Countries_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      region_id_link: {
        name: "region_id_link",
        columns: ["region"],
        referencedTable: "Regions",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      Countries__pgroll_new_code_key: {
        name: "Countries__pgroll_new_code_key",
        columns: ["code"],
      },
      Countries__pgroll_new_country_id_key: {
        name: "Countries__pgroll_new_country_id_key",
        columns: ["country_id"],
      },
      Countries__pgroll_new_name_key: {
        name: "Countries__pgroll_new_name_key",
        columns: ["country_name"],
      },
      _pgroll_new_Countries_xata_id_key: {
        name: "_pgroll_new_Countries_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "code",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "country_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "country_name",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "region",
        type: "link",
        link: { table: "Regions" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Regions"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Insights",
    checkConstraints: {
      Insights_xata_id_length_xata_id: {
        name: "Insights_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      category_link: {
        name: "category_link",
        columns: ["category"],
        referencedTable: "Categories",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      Insights__pgroll_new_insight_id_key: {
        name: "Insights__pgroll_new_insight_id_key",
        columns: ["insight_id"],
      },
      _pgroll_new_Insights_xata_id_key: {
        name: "_pgroll_new_Insights_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "category",
        type: "link",
        link: { table: "Categories" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Categories"}',
      },
      {
        name: "insight",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "insight_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "lower_limit",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "upper_limit",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "InsightsPerUserCategory",
    checkConstraints: {
      InsightsPerUserCategory_xata_id_length_xata_id: {
        name: "InsightsPerUserCategory_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      category_link: {
        name: "category_link",
        columns: ["category"],
        referencedTable: "Categories",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
      insight_link: {
        name: "insight_link",
        columns: ["insight"],
        referencedTable: "Insights",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
      test_link: {
        name: "test_link",
        columns: ["test"],
        referencedTable: "Tests",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
      user_link: {
        name: "user_link",
        columns: ["user"],
        referencedTable: "Users",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      InsightsPerUserCategory__pgroll_new_insight_user_id_key: {
        name: "InsightsPerUserCategory__pgroll_new_insight_user_id_key",
        columns: ["insight_user_id"],
      },
      _pgroll_new_InsightsPerUserCategory_xata_id_key: {
        name: "_pgroll_new_InsightsPerUserCategory_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "category",
        type: "link",
        link: { table: "Categories" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Categories"}',
      },
      {
        name: "insight",
        type: "link",
        link: { table: "Insights" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Insights"}',
      },
      {
        name: "insight_user_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "test",
        type: "link",
        link: { table: "Tests" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Tests"}',
      },
      {
        name: "user",
        type: "link",
        link: { table: "Users" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Users"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "PersonalizedAnswers",
    checkConstraints: {
      PersonalizedAnswers_xata_id_length_xata_id: {
        name: "PersonalizedAnswers_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      question_link: {
        name: "question_link",
        columns: ["question"],
        referencedTable: "Questions",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      PersonalizedAnswers__pgroll_new_pers_answer_id_key: {
        name: "PersonalizedAnswers__pgroll_new_pers_answer_id_key",
        columns: ["pers_answer_id"],
      },
      _pgroll_new_PersonalizedAnswers_xata_id_key: {
        name: "_pgroll_new_PersonalizedAnswers_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "answer",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "pers_answer_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "question",
        type: "link",
        link: { table: "Questions" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Questions"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Questions",
    checkConstraints: {
      Questions_xata_id_length_xata_id: {
        name: "Questions_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      area_link: {
        name: "area_link",
        columns: ["area"],
        referencedTable: "Areas",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
      test_link: {
        name: "test_link",
        columns: ["test"],
        referencedTable: "Tests",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      Questions__pgroll_new_question_id_key: {
        name: "Questions__pgroll_new_question_id_key",
        columns: ["question_id"],
      },
      _pgroll_new_Questions_xata_id_key: {
        name: "_pgroll_new_Questions_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "area",
        type: "link",
        link: { table: "Areas" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Areas"}',
      },
      {
        name: "question",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "question_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "sort_order",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "std_answer",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "test",
        type: "link",
        link: { table: "Tests" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Tests"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Regions",
    checkConstraints: {
      Regions_xata_id_length_xata_id: {
        name: "Regions_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {},
    primaryKey: [],
    uniqueConstraints: {
      Regions__pgroll_new_name_key: {
        name: "Regions__pgroll_new_name_key",
        columns: ["region_name"],
      },
      Regions__pgroll_new_region_id_key: {
        name: "Regions__pgroll_new_region_id_key",
        columns: ["region_id"],
      },
      _pgroll_new_Regions_xata_id_key: {
        name: "_pgroll_new_Regions_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "region_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "region_name",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "StandardAnswers",
    checkConstraints: {
      Answers_xata_id_length_xata_id: {
        name: "Answers_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {},
    primaryKey: [],
    uniqueConstraints: {
      Answers__pgroll_new_answer_id_key: {
        name: "Answers__pgroll_new_answer_id_key",
        columns: ["std_answer_id"],
      },
      Answers__pgroll_new_answer_key: {
        name: "Answers__pgroll_new_answer_key",
        columns: ["answer"],
      },
      _pgroll_new_Answers_xata_id_key: {
        name: "_pgroll_new_Answers_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "answer",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "std_answer_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Tests",
    checkConstraints: {
      Tests_xata_id_length_xata_id: {
        name: "Tests_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {},
    primaryKey: [],
    uniqueConstraints: {
      Tests__pgroll_new_test_description_key: {
        name: "Tests__pgroll_new_test_description_key",
        columns: ["test_description"],
      },
      Tests__pgroll_new_test_id_key: {
        name: "Tests__pgroll_new_test_id_key",
        columns: ["test_id"],
      },
      Tests__pgroll_new_test_name_key: {
        name: "Tests__pgroll_new_test_name_key",
        columns: ["test_name"],
      },
      _pgroll_new_Tests_xata_id_key: {
        name: "_pgroll_new_Tests_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "test_description",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "test_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "test_name",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "total_questions",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "UserTestProgress",
    checkConstraints: {
      UserTestProgress_xata_id_length_xata_id: {
        name: "UserTestProgress_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      question_link: {
        name: "question_link",
        columns: ["question"],
        referencedTable: "Questions",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
      test_link: {
        name: "test_link",
        columns: ["test"],
        referencedTable: "Tests",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
      user_link: {
        name: "user_link",
        columns: ["user"],
        referencedTable: "Users",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      UserTestProgress__pgroll_new_user_progress_id_key: {
        name: "UserTestProgress__pgroll_new_user_progress_id_key",
        columns: ["user_progress_id"],
      },
      _pgroll_new_UserTestProgress_xata_id_key: {
        name: "_pgroll_new_UserTestProgress_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "answers",
        type: "json",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "completed_at",
        type: "datetime",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "question",
        type: "link",
        link: { table: "Questions" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Questions"}',
      },
      {
        name: "started_at",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "status",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "test",
        type: "link",
        link: { table: "Tests" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Tests"}',
      },
      {
        name: "user",
        type: "link",
        link: { table: "Users" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Users"}',
      },
      {
        name: "user_progress_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Users",
    checkConstraints: {
      Users_xata_id_length_xata_id: {
        name: "Users_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      country_link: {
        name: "country_link",
        columns: ["country"],
        referencedTable: "Countries",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      Users__pgroll_new_user_id_key: {
        name: "Users__pgroll_new_user_id_key",
        columns: ["user_id"],
      },
      Users__pgroll_new_user_uuid_key: {
        name: "Users__pgroll_new_user_uuid_key",
        columns: ["user_uuid"],
      },
      Users__pgroll_new_username_key: {
        name: "Users__pgroll_new_username_key",
        columns: ["username"],
      },
      Users__pgroll_new_wallet_address_key: {
        name: "Users__pgroll_new_wallet_address_key",
        columns: ["wallet_address"],
      },
      Users_email_unique: { name: "Users_email_unique", columns: ["email"] },
      _pgroll_new_Users_xata_id_key: {
        name: "_pgroll_new_Users_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "age",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "country",
        type: "link",
        link: { table: "Countries" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Countries"}',
      },
      {
        name: "created_at",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "email",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "last_name",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "name",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "subscription",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "updated_at",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "user_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "user_uuid",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "username",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "verified",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "wallet_address",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "WeightsPerAnswer",
    checkConstraints: {
      WeightsPerAnswer_xata_id_length_xata_id: {
        name: "WeightsPerAnswer_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      category_link: {
        name: "category_link",
        columns: ["category"],
        referencedTable: "Categories",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
      pers_answer_link: {
        name: "pers_answer_link",
        columns: ["pers_answer"],
        referencedTable: "PersonalizedAnswers",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
      std_answer_link: {
        name: "std_answer_link",
        columns: ["std_answer"],
        referencedTable: "StandardAnswers",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      WeightsPerAnswer__pgroll_new_weight_id_key: {
        name: "WeightsPerAnswer__pgroll_new_weight_id_key",
        columns: ["weight_id"],
      },
      _pgroll_new_WeightsPerAnswer_xata_id_key: {
        name: "_pgroll_new_WeightsPerAnswer_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "category",
        type: "link",
        link: { table: "Categories" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"Categories"}',
      },
      {
        name: "pers_answer",
        type: "link",
        link: { table: "PersonalizedAnswers" },
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"PersonalizedAnswers"}',
      },
      {
        name: "std_answer",
        type: "link",
        link: { table: "StandardAnswers" },
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"StandardAnswers"}',
      },
      {
        name: "weight_id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "weight_value",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Areas = InferredTypes["Areas"];
export type AreasRecord = Areas & XataRecord;

export type Categories = InferredTypes["Categories"];
export type CategoriesRecord = Categories & XataRecord;

export type Countries = InferredTypes["Countries"];
export type CountriesRecord = Countries & XataRecord;

export type Insights = InferredTypes["Insights"];
export type InsightsRecord = Insights & XataRecord;

export type InsightsPerUserCategory = InferredTypes["InsightsPerUserCategory"];
export type InsightsPerUserCategoryRecord = InsightsPerUserCategory &
  XataRecord;

export type PersonalizedAnswers = InferredTypes["PersonalizedAnswers"];
export type PersonalizedAnswersRecord = PersonalizedAnswers & XataRecord;

export type Questions = InferredTypes["Questions"];
export type QuestionsRecord = Questions & XataRecord;

export type Regions = InferredTypes["Regions"];
export type RegionsRecord = Regions & XataRecord;

export type StandardAnswers = InferredTypes["StandardAnswers"];
export type StandardAnswersRecord = StandardAnswers & XataRecord;

export type Tests = InferredTypes["Tests"];
export type TestsRecord = Tests & XataRecord;

export type UserTestProgress = InferredTypes["UserTestProgress"];
export type UserTestProgressRecord = UserTestProgress & XataRecord;

export type Users = InferredTypes["Users"];
export type UsersRecord = Users & XataRecord;

export type WeightsPerAnswer = InferredTypes["WeightsPerAnswer"];
export type WeightsPerAnswerRecord = WeightsPerAnswer & XataRecord;

export type DatabaseSchema = {
  Areas: AreasRecord;
  Categories: CategoriesRecord;
  Countries: CountriesRecord;
  Insights: InsightsRecord;
  InsightsPerUserCategory: InsightsPerUserCategoryRecord;
  PersonalizedAnswers: PersonalizedAnswersRecord;
  Questions: QuestionsRecord;
  Regions: RegionsRecord;
  StandardAnswers: StandardAnswersRecord;
  Tests: TestsRecord;
  UserTestProgress: UserTestProgressRecord;
  Users: UsersRecord;
  WeightsPerAnswer: WeightsPerAnswerRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://bitfalt-mmda85.us-east-1.xata.sh/db/MindVault-MiniApp",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
