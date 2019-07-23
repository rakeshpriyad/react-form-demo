package com.test.react.restful.controller;

public class Emp {
    private Integer id;
    private String address;
    private Integer age;
    private Double salary;

    @Override
    public String toString() {
        return "Emp{" +
                "id=" + id +
                ", address='" + address + '\'' +
                ", age=" + age +
                ", salary=" + salary +
                '}';
    }

    public Emp() {

    }

    public Emp(Integer id, String address, Integer age, Double salary) {
        this.id = id;
        this.address = address;
        this.age = age;
        this.salary = salary;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
