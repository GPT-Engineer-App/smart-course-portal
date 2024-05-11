import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const coursesData = [
  { id: 1, name: "Introduction to Psychology", semester: "Fall 2023", students: [{ id: 1, name: "John Doe", grade: "A" }] },
  { id: 2, name: "Fundamentals of Computer Science", semester: "Spring 2024", students: [{ id: 2, name: "Jane Smith", grade: "B+" }] },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [userType, setUserType] = useState("student"); // 'instructor' or 'student'

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const renderInstructorView = () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Manage Courses</Heading>
      {coursesData.map((course) => (
        <Box p={5} shadow="md" borderWidth="1px" key={course.id}>
          <Heading fontSize="xl">{course.name}</Heading>
          <Text>Semester: {course.semester}</Text>
          <Text>Students Enrolled: {course.students.length}</Text>
          {/* More detailed management features would be implemented here */}
        </Box>
      ))}
    </VStack>
  );

  const renderStudentView = () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Your Courses</Heading>
      {coursesData.map((course) => (
        <Box p={5} shadow="md" borderWidth="1px" key={course.id}>
          <Heading fontSize="xl">{course.name}</Heading>
          <Text>Semester: {course.semester}</Text>
          {/* More detailed course progress features would be implemented here */}
        </Box>
      ))}
    </VStack>
  );

  return (
    <Container maxW="container.md" py={10}>
      <Tabs index={activeTab} onChange={handleTabChange}>
        <TabList>
          <Tab>Student</Tab>
          <Tab>Instructor</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex direction="column" align="center" justify="center">
              {renderStudentView()}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex direction="column" align="center" justify="center">
              {renderInstructorView()}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Index;
