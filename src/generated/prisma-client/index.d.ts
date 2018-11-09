// Code generated by Prisma (prisma@1.19.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  project: (where?: ProjectWhereInput) => Promise<boolean>;
  task: (where?: TaskWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  project: (where: ProjectWhereUniqueInput) => Project;
  projects: (
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<ProjectNode>;
  projectsConnection: (
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProjectConnection;
  task: (where: TaskWhereUniqueInput) => Task;
  tasks: (
    args?: {
      where?: TaskWhereInput;
      orderBy?: TaskOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<TaskNode>;
  tasksConnection: (
    args?: {
      where?: TaskWhereInput;
      orderBy?: TaskOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TaskConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProject: (data: ProjectCreateInput) => Project;
  updateProject: (
    args: { data: ProjectUpdateInput; where: ProjectWhereUniqueInput }
  ) => Project;
  updateManyProjects: (
    args: { data: ProjectUpdateInput; where?: ProjectWhereInput }
  ) => BatchPayload;
  upsertProject: (
    args: {
      where: ProjectWhereUniqueInput;
      create: ProjectCreateInput;
      update: ProjectUpdateInput;
    }
  ) => Project;
  deleteProject: (where: ProjectWhereUniqueInput) => Project;
  deleteManyProjects: (where?: ProjectWhereInput) => BatchPayload;
  createTask: (data: TaskCreateInput) => Task;
  updateTask: (
    args: { data: TaskUpdateInput; where: TaskWhereUniqueInput }
  ) => Task;
  updateManyTasks: (
    args: { data: TaskUpdateInput; where?: TaskWhereInput }
  ) => BatchPayload;
  upsertTask: (
    args: {
      where: TaskWhereUniqueInput;
      create: TaskCreateInput;
      update: TaskUpdateInput;
    }
  ) => Task;
  deleteTask: (where: TaskWhereUniqueInput) => Task;
  deleteManyTasks: (where?: TaskWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  project: (
    where?: ProjectSubscriptionWhereInput
  ) => ProjectSubscriptionPayloadSubscription;
  task: (
    where?: TaskSubscriptionWhereInput
  ) => TaskSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TaskOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "isCompleted_ASC"
  | "isCompleted_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ProjectOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TaskCreateWithoutProjectInput {
  title: String;
  isCompleted?: Boolean;
}

export type ProjectWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface TaskUpdateManyWithoutProjectInput {
  create?: TaskCreateWithoutProjectInput[] | TaskCreateWithoutProjectInput;
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput;
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput;
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput;
  update?:
    | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    | TaskUpdateWithWhereUniqueWithoutProjectInput;
  upsert?:
    | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    | TaskUpsertWithWhereUniqueWithoutProjectInput;
}

export interface ProjectWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  tasks_every?: TaskWhereInput;
  tasks_some?: TaskWhereInput;
  tasks_none?: TaskWhereInput;
  AND?: ProjectWhereInput[] | ProjectWhereInput;
  OR?: ProjectWhereInput[] | ProjectWhereInput;
  NOT?: ProjectWhereInput[] | ProjectWhereInput;
}

export interface TaskUpdateWithWhereUniqueWithoutProjectInput {
  where: TaskWhereUniqueInput;
  data: TaskUpdateWithoutProjectDataInput;
}

export interface TaskWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  project?: ProjectWhereInput;
  isCompleted?: Boolean;
  isCompleted_not?: Boolean;
  AND?: TaskWhereInput[] | TaskWhereInput;
  OR?: TaskWhereInput[] | TaskWhereInput;
  NOT?: TaskWhereInput[] | TaskWhereInput;
}

export interface ProjectCreateWithoutTasksInput {
  name: String;
}

export interface TaskUpsertWithWhereUniqueWithoutProjectInput {
  where: TaskWhereUniqueInput;
  update: TaskUpdateWithoutProjectDataInput;
  create: TaskCreateWithoutProjectInput;
}

export interface TaskUpdateWithoutProjectDataInput {
  title?: String;
  isCompleted?: Boolean;
}

export interface ProjectSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProjectWhereInput;
  AND?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
  OR?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
  NOT?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
}

export interface ProjectCreateInput {
  name: String;
  tasks?: TaskCreateManyWithoutProjectInput;
}

export interface ProjectUpdateWithoutTasksDataInput {
  name?: String;
}

export interface TaskCreateInput {
  title: String;
  project: ProjectCreateOneWithoutTasksInput;
  isCompleted?: Boolean;
}

export interface ProjectUpdateInput {
  name?: String;
  tasks?: TaskUpdateManyWithoutProjectInput;
}

export interface ProjectCreateOneWithoutTasksInput {
  create?: ProjectCreateWithoutTasksInput;
  connect?: ProjectWhereUniqueInput;
}

export interface TaskCreateManyWithoutProjectInput {
  create?: TaskCreateWithoutProjectInput[] | TaskCreateWithoutProjectInput;
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput;
}

export type TaskWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ProjectUpsertWithoutTasksInput {
  update: ProjectUpdateWithoutTasksDataInput;
  create: ProjectCreateWithoutTasksInput;
}

export interface TaskSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TaskWhereInput;
  AND?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput;
  OR?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput;
  NOT?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput;
}

export interface TaskUpdateInput {
  title?: String;
  project?: ProjectUpdateOneRequiredWithoutTasksInput;
  isCompleted?: Boolean;
}

export interface ProjectUpdateOneRequiredWithoutTasksInput {
  create?: ProjectCreateWithoutTasksInput;
  update?: ProjectUpdateWithoutTasksDataInput;
  upsert?: ProjectUpsertWithoutTasksInput;
  connect?: ProjectWhereUniqueInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface TaskPreviousValuesNode {
  id: ID_Output;
  title: String;
  isCompleted: Boolean;
}

export interface TaskPreviousValues
  extends Promise<TaskPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  isCompleted: () => Promise<Boolean>;
}

export interface TaskPreviousValuesSubscription
  extends Promise<AsyncIterator<TaskPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  isCompleted: () => Promise<AsyncIterator<Boolean>>;
}

export interface AggregateProjectNode {
  count: Int;
}

export interface AggregateProject
  extends Promise<AggregateProjectNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProjectSubscription
  extends Promise<AsyncIterator<AggregateProjectNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TaskNode {
  id: ID_Output;
  title: String;
  isCompleted: Boolean;
}

export interface Task extends Promise<TaskNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  project: <T = Project>() => T;
  isCompleted: () => Promise<Boolean>;
}

export interface TaskSubscription
  extends Promise<AsyncIterator<TaskNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  project: <T = ProjectSubscription>() => T;
  isCompleted: () => Promise<AsyncIterator<Boolean>>;
}

export interface ProjectEdgeNode {
  cursor: String;
}

export interface ProjectEdge extends Promise<ProjectEdgeNode>, Fragmentable {
  node: <T = Project>() => T;
  cursor: () => Promise<String>;
}

export interface ProjectEdgeSubscription
  extends Promise<AsyncIterator<ProjectEdgeNode>>,
    Fragmentable {
  node: <T = ProjectSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ProjectSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ProjectSubscriptionPayload
  extends Promise<ProjectSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Project>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProjectPreviousValues>() => T;
}

export interface ProjectSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProjectSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProjectSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProjectPreviousValuesSubscription>() => T;
}

export interface ProjectNode {
  id: ID_Output;
  name: String;
}

export interface Project extends Promise<ProjectNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  tasks: <T = FragmentableArray<TaskNode>>(
    args?: {
      where?: TaskWhereInput;
      orderBy?: TaskOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ProjectSubscription
  extends Promise<AsyncIterator<ProjectNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  tasks: <T = Promise<AsyncIterator<TaskSubscription>>>(
    args?: {
      where?: TaskWhereInput;
      orderBy?: TaskOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ProjectPreviousValuesNode {
  id: ID_Output;
  name: String;
}

export interface ProjectPreviousValues
  extends Promise<ProjectPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ProjectPreviousValuesSubscription
  extends Promise<AsyncIterator<ProjectPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface ProjectConnectionNode {}

export interface ProjectConnection
  extends Promise<ProjectConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<ProjectEdgeNode>>() => T;
  aggregate: <T = AggregateProject>() => T;
}

export interface ProjectConnectionSubscription
  extends Promise<AsyncIterator<ProjectConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProjectEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProjectSubscription>() => T;
}

export interface TaskSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface TaskSubscriptionPayload
  extends Promise<TaskSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Task>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TaskPreviousValues>() => T;
}

export interface TaskSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TaskSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TaskSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TaskPreviousValuesSubscription>() => T;
}

export interface TaskConnectionNode {}

export interface TaskConnection
  extends Promise<TaskConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<TaskEdgeNode>>() => T;
  aggregate: <T = AggregateTask>() => T;
}

export interface TaskConnectionSubscription
  extends Promise<AsyncIterator<TaskConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TaskEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTaskSubscription>() => T;
}

export interface TaskEdgeNode {
  cursor: String;
}

export interface TaskEdge extends Promise<TaskEdgeNode>, Fragmentable {
  node: <T = Task>() => T;
  cursor: () => Promise<String>;
}

export interface TaskEdgeSubscription
  extends Promise<AsyncIterator<TaskEdgeNode>>,
    Fragmentable {
  node: <T = TaskSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTaskNode {
  count: Int;
}

export interface AggregateTask
  extends Promise<AggregateTaskNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTaskSubscription
  extends Promise<AsyncIterator<AggregateTaskNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/**
 * Type Defs
 */

export const prisma: Prisma;
