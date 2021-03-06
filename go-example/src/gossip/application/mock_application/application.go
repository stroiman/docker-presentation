// Code generated by MockGen. DO NOT EDIT.
// Source: application.go

// Package mock_application is a generated GoMock package.
package mock_application

import (
	gomock "github.com/golang/mock/gomock"
	domain "gossip/domain"
	reflect "reflect"
)

// MockQueueing is a mock of Queueing interface
type MockQueueing struct {
	ctrl     *gomock.Controller
	recorder *MockQueueingMockRecorder
}

// MockQueueingMockRecorder is the mock recorder for MockQueueing
type MockQueueingMockRecorder struct {
	mock *MockQueueing
}

// NewMockQueueing creates a new mock instance
func NewMockQueueing(ctrl *gomock.Controller) *MockQueueing {
	mock := &MockQueueing{ctrl: ctrl}
	mock.recorder = &MockQueueingMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockQueueing) EXPECT() *MockQueueingMockRecorder {
	return m.recorder
}

// PublishMessage mocks base method
func (m *MockQueueing) PublishMessage(arg0 domain.Message) error {
	ret := m.ctrl.Call(m, "PublishMessage", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// PublishMessage indicates an expected call of PublishMessage
func (mr *MockQueueingMockRecorder) PublishMessage(arg0 interface{}) *gomock.Call {
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "PublishMessage", reflect.TypeOf((*MockQueueing)(nil).PublishMessage), arg0)
}

// MockDataAccess is a mock of DataAccess interface
type MockDataAccess struct {
	ctrl     *gomock.Controller
	recorder *MockDataAccessMockRecorder
}

// MockDataAccessMockRecorder is the mock recorder for MockDataAccess
type MockDataAccessMockRecorder struct {
	mock *MockDataAccess
}

// NewMockDataAccess creates a new mock instance
func NewMockDataAccess(ctrl *gomock.Controller) *MockDataAccess {
	mock := &MockDataAccess{ctrl: ctrl}
	mock.recorder = &MockDataAccessMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockDataAccess) EXPECT() *MockDataAccessMockRecorder {
	return m.recorder
}

// GetMessages mocks base method
func (m *MockDataAccess) GetMessages() ([]domain.Message, error) {
	ret := m.ctrl.Call(m, "GetMessages")
	ret0, _ := ret[0].([]domain.Message)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMessages indicates an expected call of GetMessages
func (mr *MockDataAccessMockRecorder) GetMessages() *gomock.Call {
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMessages", reflect.TypeOf((*MockDataAccess)(nil).GetMessages))
}

// InsertMessage mocks base method
func (m *MockDataAccess) InsertMessage(arg0 domain.Message) error {
	ret := m.ctrl.Call(m, "InsertMessage", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// InsertMessage indicates an expected call of InsertMessage
func (mr *MockDataAccessMockRecorder) InsertMessage(arg0 interface{}) *gomock.Call {
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "InsertMessage", reflect.TypeOf((*MockDataAccess)(nil).InsertMessage), arg0)
}

// UpdateMessage mocks base method
func (m *MockDataAccess) UpdateMessage(arg0 domain.Message) error {
	ret := m.ctrl.Call(m, "UpdateMessage", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateMessage indicates an expected call of UpdateMessage
func (mr *MockDataAccessMockRecorder) UpdateMessage(arg0 interface{}) *gomock.Call {
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateMessage", reflect.TypeOf((*MockDataAccess)(nil).UpdateMessage), arg0)
}
